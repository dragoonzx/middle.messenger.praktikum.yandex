enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type MethodsTypes = keyof typeof Methods

type RequestOptions = {
  data?: Record<string, unknown> | undefined
  headers?: Record<string, string> | undefined
  timeout?: number
}

interface RESTLayer {
  get(
    url: string,
    options: RequestOptions
  ): Promise<XMLHttpRequest['responseType']>

  post(
    url: string,
    options: RequestOptions
  ): Promise<XMLHttpRequest['responseType']>

  delete(
    url: string,
    options: RequestOptions
  ): Promise<XMLHttpRequest['responseType']>

  put(
    url: string,
    options: RequestOptions
  ): Promise<XMLHttpRequest['responseType']>
}

export {
  Methods,
  RESTLayer,
  MethodsTypes,
  RequestOptions,
}
