import { vars } from '@jaxson/ui/theme'

export const StarIcon: React.FC<React.ComponentProps<'svg'>> = ({
  className,
  style,
  ...rest
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ ...style, color: vars.colors.borderWarning }}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)
