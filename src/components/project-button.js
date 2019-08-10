import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faScroll } from '@fortawesome/free-solid-svg-icons'
import Button from './page-link'

const ProjectButton = p => {
  if (p.type === 'game') return (<Button {...p}><Icon icon={faPlayCircle}/> Play</Button>)
  else if (p.type === 'react') return (<Button {...p}><Icon icon={faPlayCircle}/> View Demo</Button>)
  else if (p.type === 'resume') return (<Button {...p}><Icon icon={faScroll}/> View Resume</Button>)
  else return (<Button {...p}><Icon icon={faPlayCircle}/> View Site</Button>)
}

ProjectButton.defaultProps = {
  inline: true
}

export default ProjectButton
