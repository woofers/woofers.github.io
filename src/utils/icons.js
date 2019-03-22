import { dom } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faArrowCircleDown,
         faPlayCircle,
         faExclamationTriangle,
         faChevronRight,
         faEnvelope,
         faArrowUp,
         faArrowLeft,
         faArrowDown,
         faArrowRight,
         faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub,
         faLinkedinIn as faLinkedin,
         faTwitter,
         faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowCircleDown,
            faGithub,
            faLinkedin,
            faTwitter,
            faPlayCircle,
            faGoogle,
            faExclamationTriangle,
            faCheckCircle,
            faTimesCircle,
            faChevronRight,
            faEnvelope,
            faArrowUp,
            faArrowLeft,
            faArrowDown,
            faArrowRight
)


export const icons = { watch: dom.watch }
