import { css } from '@emotion/core'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faArrowCircleDown,
         faPlayCircle,
         faExclamationTriangle,
         faChevronRight,
         faEnvelope,
         faStar,
         faScroll,
         faBalanceScale,
         faArrowUp,
         faArrowLeft,
         faArrowDown,
         faArrowRight,
         faInfoCircle } from '@fortawesome/free-solid-svg-icons'
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
            faStar,
            faScroll,
            faBalanceScale,
            faArrowUp,
            faArrowLeft,
            faArrowDown,
            faArrowRight,
            faInfoCircle
)

export const style = css`
  .svg-inline--fa {
    max-height: 26px;
  }
  .fa-exclamation-triangle {
    max-height: 306px;
  }
`

export const icons = { watch: dom.watch }
