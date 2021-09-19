import fetch from 'isomorphic-unfetch'

export const post = (url, { body, ...options }) => {
  return new Promise((resolve, reject) => {
    fetch(url, { body: JSON.stringify(body), ...options, method: 'POST' })
      .then(res => res.json().then(body => [body, res]))
      .then(([body, res]) => {
        if (res.status >= 400) reject(body)
        return resolve(body)
      })
      .catch(err => reject(err))
  })
}
