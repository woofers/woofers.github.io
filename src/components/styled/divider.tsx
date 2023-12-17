import { clsx } from 'cva'

const Divider: React.FC<{
  direction?: 'vertical' | 'horizontal'
  className?: string
}> = ({ direction = 'horizontal', className }) =>
  direction !== 'vertical' ? (
    <hr
      className={clsx(
        'my-4 border-gray-200 dark-mode:text-[#212121]',
        className
      )}
    />
  ) : (
    <div
      className={clsx(
        'mx-0.5 w-px h-5 bg-gray-200 dark-mode:text-[#212121]',
        className
      )}
    ></div>
  )

export default Divider
