export const DownloadIcon: React.FC<React.ComponentProps<'svg'>> = ({
  className,
  ...rest
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...rest}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12 2c5.51 0 10 4.49 10 10s-4.49 10-10 10S2 17.51 2 12 6.49 2 12 2Zm-1.2 11.774-3.263-3.263L5.76 12.3l6.3 6.3 6.3-6.3-1.776-1.777-3.264 3.251V6H10.8v7.774Z"
    />
  </svg>
)
