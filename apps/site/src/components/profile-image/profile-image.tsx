import { desktopImage } from './profile-image.css'

export const ProfileImage: React.FC<Nothing> = () => {
  return (
    <>
      <img
        src="/jaxson-2025-small.webp"
        alt=""
        width={64}
        height={64}
        style={{
          filter: 'brightness(1.2)',
          borderRadius: 'var(--radius-md)'
        }}
        className={desktopImage}
      />
    </>
  )
}
