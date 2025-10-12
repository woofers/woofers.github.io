type FetchType = typeof fetch

type Arguments = Parameters<FetchType>

type NonNullable<T> = Exclude<T, null | undefined>

type Options = NonNullable<Arguments[1]>

type OptionsWithoutMethod = Omit<Options, 'method'>

type OptionsWithoutMethodBody = Omit<Options, 'body'> & { body?: {} }

export const post = <T extends {}>(
  url: string,
  { body, ...options }: OptionsWithoutMethodBody = {}
) => {
  return new Promise<T>((resolve, reject) => {
    fetch(url, { body: JSON.stringify(body), ...options, method: 'POST' })
      .then(res => res.json().then(body => [body, res]))
      .then(([body, res]) => {
        if (res.status >= 400) reject(body)
        return resolve(body)
      })
      .catch(err => reject(err))
  })
}

export const get = <T extends {}>(
  url: string,
  { ...options }: OptionsWithoutMethod = {}
) => {
  return new Promise<T>((resolve, reject) => {
    fetch(url, { ...options, method: 'GET' })
      .then(res => res.json().then(body => [body, res]))
      .then(([body, res]) => {
        if (res.status >= 400) reject(body)
        return resolve(body)
      })
      .catch(err => reject(err))
  })
}
