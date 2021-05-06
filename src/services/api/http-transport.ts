import { queryStringify } from '../../utils/index'
import {
  Methods,
  RESTLayer,
  MethodsTypes,
  RequestOptions,
} from './types'

class HTTPTransport implements RESTLayer {
  private baseUrl = 'https://ya-praktikum.tech/api/v2'

  private requestWrapper(
    url: string,
    options: RequestOptions | undefined,
    method: MethodsTypes,
  ): Promise<XMLHttpRequest['responseType']> {
    return this.request(
      url,
      { ...options },
      method,
      options?.timeout,
    )
  }

  get(
    url: string,
    options?: RequestOptions | undefined,
  ): Promise<XMLHttpRequest['responseType']> {
    return this.requestWrapper(
      url,
      options,
      Methods.GET,
    )
  }

  put(
    url: string,
    options: RequestOptions,
  ): Promise<XMLHttpRequest['responseType']> {
    return this.requestWrapper(
      url,
      options,
      Methods.PUT,
    )
  }

  post(
    url: string,
    options: RequestOptions,
  ): Promise<XMLHttpRequest['responseType']> {
    return this.requestWrapper(
      url,
      options,
      Methods.POST,
    )
  }

  delete(
    url: string,
    options: RequestOptions,
  ): Promise<XMLHttpRequest['responseType']> {
    return this.requestWrapper(
      url,
      options,
      Methods.DELETE,
    )
  }

  private request(
    url: string,
    options: RequestOptions,
    method: MethodsTypes = Methods.GET,
    timeout = 5000,
  ): Promise<XMLHttpRequest['responseType']> {
    const { data, headers } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, this.baseUrl + url + queryStringify(data, method))

      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
      xhr.withCredentials = true

      xhr.addEventListener('load', () => {
        resolve(xhr.response)
      })

      this.setXhrHeadersAndTimeout(xhr, headers, timeout)

      xhr.addEventListener('abort', reject)
      xhr.addEventListener('error', reject)
      xhr.ontimeout = reject

      xhr.send(JSON.stringify(data))
    })
  }

  private setXhrHeadersAndTimeout(
    xhr: XMLHttpRequest,
    headers: Record<string, string> | undefined,
    timeout: number,
  ): void {
    if (headers) {
      for (const [header, value] of Object.entries(headers)) {
        xhr.setRequestHeader(header, value)
      }
    }

    xhr.timeout = timeout
  }
}

export { HTTPTransport }
