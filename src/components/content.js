const Content = ({ html, as = 'div', ...rest }) =>
  as === 'div' ? (
    <div {...rest} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <code {...rest} dangerouslySetInnerHTML={{ __html: html }} />
  )

export default Content
