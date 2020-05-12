const responseBody = {
  message: '',
  data: null,
  code: 0,
  success: true
}

export const builder = (data, message, code = 0, success = true, headers = {}) => {
  responseBody.data = data
  responseBody.message = message
  responseBody.code = code

  if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
    responseBody.headers = headers
  }

  responseBody.success = success
  return responseBody
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
