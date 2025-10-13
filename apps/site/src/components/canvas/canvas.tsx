'use client'
import { Box } from '@jaxson/ui/box'
import {
  Clone,
  OrbitControls,
  useAnimations,
  useGLTF,
  useTexture
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import * as THREE from 'three'
import type { GLTF } from 'three-stdlib'

const withBasename = (path: string) => `/gamecube/${path}`

const caseModel = withBasename('gamecube.glb')

type ActionName = 'FullPullOut' | 'PullOut'

type GLTFAction = THREE.AnimationClip & {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Case: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

const cloneMaterial = (
  material: THREE.MeshStandardMaterial,
  texture: THREE.Texture
) => {
  const clonedMaterial = material.clone()
  const clonedMap = new THREE.Texture()

  if (material.map && clonedMap) {
    clonedMap.image = texture.image
    clonedMap.needsUpdate = true

    clonedMap.offset.copy(material.map.offset)
    clonedMap.repeat.copy(material.map.repeat)
    clonedMap.center.copy(material.map.center)
    clonedMap.rotation = material.map.rotation

    clonedMap.wrapS = material.map.wrapS
    clonedMap.wrapT = material.map.wrapT
    clonedMap.magFilter = material.map.magFilter
    clonedMap.minFilter = material.map.minFilter
    clonedMap.anisotropy = material.map.anisotropy
    clonedMap.format = material.map.format
    clonedMap.type = material.map.type
    clonedMap.colorSpace = material.map.colorSpace
    clonedMap.flipY = material.map.flipY
    clonedMap.generateMipmaps = material.map.generateMipmaps
    clonedMap.userData = { ...material.map.userData }

    clonedMaterial.map = clonedMap
  }
  return clonedMaterial
}

const useSwapTexture = (path: string, material: THREE.MeshStandardMaterial) => {
  const texture = useTexture(path)
  const texturedMaterial = useMemo(() => {
    if (!texture) return material
    return cloneMaterial(material, texture)
  }, [texture, material])
  return texturedMaterial
}

type GroupProps = React.ComponentPropsWithRef<'group'>

const fullRotation = 2 * Math.PI
const normalizeAngle = (angle: number) => {
  const normalized = angle % fullRotation
  return normalized < 0 ? normalized + fullRotation : normalized
}

const isNearAngle = (
  current: number,
  target: number,
  tolerance: number = 0.1
) => {
  const normalizedCurrent = normalizeAngle(current)
  const normalizedTarget = normalizeAngle(target)
  const diff = Math.abs(normalizedCurrent - normalizedTarget)
  return diff <= tolerance || diff >= fullRotation - tolerance
}

type State = 'idle' | 'move' | 'reset' | 'spin'

const ROTATION_SPEED = 3 + 1 / 3
const MOVEMENT_SPEED = 6 + 2 / 3
const HEIGHT = 0.2

const useModel = (cover: string) => {
  const data = useGLTF(caseModel) as unknown as GLTFResult
  const { nodes, materials: mat, animations } = data
  const material = mat['Material.001']
  const { geometry } = nodes.Case
  const texturedMaterial = useSwapTexture(cover, material)
  return { geometry, material: texturedMaterial, animations }
}

const DEFAULT_ROTATION: [number, number, number] = [0, -Math.PI / 2, 0]

const useSpinAnimation = (position: [number, number, number]) => {
  const groupRef = useRef<THREE.Group>(null!)
  const stateRef = useRef({ dir: 1, state: 'idle' as State })
  const [isHovered, setIsHovered] = useState(false)
  const HEIGHT = 0.6 + (position?.[2] ?? 0)
  const DEPTH = position?.[2] || 0

  useFrame((_state, dt) => {
    if (stateRef.current.state === 'idle' && !isHovered) {
      return
    }
    if (isHovered) {
      if (stateRef.current.state === 'idle') {
        stateRef.current.state = 'move'
      }
      if (stateRef.current.state === 'move') {
        groupRef.current.position.z += MOVEMENT_SPEED * dt
        if (groupRef.current.position.z > HEIGHT) {
          stateRef.current.state = 'spin'
        }
      } else if (stateRef.current.state === 'spin') {
        groupRef.current.rotation.y += ROTATION_SPEED * dt
      }
    } else if (stateRef.current.state === 'spin') {
      groupRef.current.rotation.y += ROTATION_SPEED * dt
      if (isNearAngle(groupRef.current.rotation.y, (3 * Math.PI) / 2)) {
        groupRef.current.rotation.y = (3 * Math.PI) / 2
        stateRef.current.state = 'reset'
      }
    } else if (stateRef.current.state === 'move') {
      stateRef.current.state = 'reset'
    } else if (stateRef.current.state === 'reset') {
      groupRef.current.position.z -= MOVEMENT_SPEED * dt
      if (groupRef.current.position.z < DEPTH) {
        stateRef.current.state = 'idle'
      }
    }
  })

  return { groupRef, setIsHovered }
}

const useTopAnimation = (position: [number, number, number]) => {
  const groupRef = useRef<THREE.Group>(null!)
  const stateRef = useRef({ dir: 1, state: 'idle' as State })
  const [isHovered, setIsHovered] = useState(false)

  const HEIGHT = (position?.[0] || 0) - 0.8

  useFrame((_state, dt) => {
    if (stateRef.current.state === 'idle' && !isHovered) {
      return
    }
    if (isHovered) {
      if (stateRef.current.state === 'idle') {
        stateRef.current.state = 'move'
      }
      if (stateRef.current.state === 'move') {
        groupRef.current.position.x -= MOVEMENT_SPEED * dt
        if (groupRef.current.position.x < HEIGHT) {
          stateRef.current.state = 'reset'
        }
      }
    }
  })

  return { groupRef, setIsHovered }
}

const Model: React.FC<
  Omit<GroupProps, 'position'> & {
    cover: string
    onHover?: (hovered: boolean) => void
    rotation?: [number, number, number]
    position?: [number, number, number]
  }
> = ({ cover, onHover, rotation = DEFAULT_ROTATION, position, ...props }) => {
  const { geometry, material, animations } = useModel(cover)
  const { groupRef, setIsHovered } = useSpinAnimation(position ?? [0, 0, 0])
  const { actions } = useAnimations(animations, groupRef)
  const animationRef = useRef(false)

  /*
  useEffect(() => {
    if (animationRef.current || !groupRef.current) {
      return
    }
    animationRef.current = true
    console.log(groupRef.current)
    actions.FullPullOut?.play()
  }, [actions])
  */

  const handlePointerEnter = () => {
    setIsHovered(true)
    onHover?.(true)
  }

  const handlePointerLeave = () => {
    setIsHovered(false)
    onHover?.(false)
  }

  return (
    <group
      ref={groupRef}
      position={position}
      {...props}
      dispose={null}
      rotation={rotation}
      scale={1}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
        frustumCulled={true}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
    </group>
  )
}

type WithPreload<T extends {}> = T & { preload: () => void }

const withModel = (game: string) => {
  const gameWithBase = withBasename(game)
  const GameModel: React.FC<
    Omit<React.ComponentProps<typeof Model>, 'cover'>
  > = props => <Model {...props} cover={gameWithBase} />
  const GameModelWithPreload = GameModel as WithPreload<typeof GameModel>
  GameModelWithPreload.preload = () => {
    useGLTF.preload(`${caseModel}`)
    useTexture.preload(gameWithBase)
  }
  return GameModel
}

const spacings = {
  topDown: {
    spacingX: 2.5,
    spacingY: -3.2,
    spacingZ: 0,
    gridSize: 5,
    offsetDistY: 1,
    offsetDistZ: -1
  },
  shelf: {
    spacingX: 2.5,
    spacingY: 0,
    spacingZ: 0.18,
    gridSize: 1,
    offsetDistY: 1,
    offsetDistZ: -4
  }
}

export const ModelGrid = React.memo<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: React.ComponentType<any>[]
  position?: [number, number, number]
}>(({ components, position = [0, 0, 0] }) => {
  const positionRef = useRef<[number, number, number][]>([])
  const [hovered, setHovered] = useState<number | null>(null)
  const type = 'topDown'
  const { spacingX, spacingY, spacingZ, gridSize, offsetDistY, offsetDistZ } =
    spacings[type]

  const handleHover = (index: number, wasHovered: boolean) => {
    if (wasHovered) {
      setHovered(index)
    } else {
      if (hovered === index) {
        setHovered(null)
      }
    }
  }

  return (
    <>
      {components.map((ModelComponent, index) => {
        const isHovered = hovered === index

        const positionLocal =
          positionRef.current[index] ||
          (() => {
            const arr = [
              (index % gridSize) * spacingX + position[0],
              Math.floor(index / gridSize) * spacingY +
                offsetDistY +
                position[1],
              Math.floor(index / gridSize) * spacingZ +
                offsetDistZ +
                position[2]
            ] as [number, number, number]
            positionRef.current[index] = arr
            return arr
          })()
        return (
          <ModelComponent
            key={index}
            position={positionLocal}
            scale={1.2}
            spin={isHovered}
            onHover={(hovered: boolean) => handleHover(index, hovered)}
          />
        )
      })}
    </>
  )
})
ModelGrid.displayName = 'ModelGrid'

const components = [
  withModel('Crazy Taxi.jpg'),
  withModel('Donkey Konga.jpg'),
  withModel("Luigi's Mansion.jpg"),
  withModel('Mario Golf Toadstool Tour.jpg'),
  withModel('Mario Kart Double Dash!!.jpg'),
  withModel('Mario Party 4.jpg'),
  withModel('Mario Power Tennis.jpg'),
  withModel('Need For Speed Carbon.jpg'),
  withModel('Need For Speed Most Wanted.jpg'),
  withModel('Paper Mario The Thousand Year Door.jpg'),
  withModel('Pikmin.jpg'),
  withModel('Resident Evil.jpg'),
  withModel('Resident Evil Zero.jpg'),
  withModel('Shadow the Hedgehog.jpg'),
  withModel('Sonic Adventure 2 Battle.jpg'),
  withModel("Sonic Adventure DX Director's Cut.jpg"),
  withModel('Sonic Heroes.jpg'),
  withModel('Spider-Man 2.jpg'),
  withModel('Super Mario Sunshine.jpg'),
  withModel('Super Monkey Ball.jpg'),
  withModel('Super Smash Bros. Melee.jpg'),
  withModel("The Legend of Zelda Collector's Edition.jpg"),
  withModel('The Legend of Zelda Four Swords Adventures.jpg'),
  withModel('The Legend of Zelda Ocarina of Time Master Quest.jpg'),
  withModel('The Legend of Zelda The Wind Waker.jpg'),
  withModel('Tony Hawk Underground.jpg'),
  withModel('Wave Race Blue Storm.jpg')
]

export const ThreeCanvas: React.FC<Nothing> = () => (
  <Box
    style={{
      background: '#fff',
      position: 'fixed',
      flexGrow: 1,
      top: 0,
      left: 0,
      zIndex: 1000,
      width: '100vw',
      height: '100vh'
    }}
  >
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls target={[0, 0, -9]} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <ModelGrid components={components} position={[-4, 6, -9]} />
      </Suspense>
    </Canvas>
  </Box>
)
