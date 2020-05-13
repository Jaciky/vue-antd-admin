export const builder = (data, message = '', code = '200', success = true, headers = {}) => {
  return {
    data,
    message,
    code,
    headers,
    success
  }
}

export const getQueryParameters = options => {
  const url = options.url
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'
  )
}

export const getBody = options => {
  return options.body && JSON.parse(options.body)
}
