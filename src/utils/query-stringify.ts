import { MethodsTypes, Methods } from '../services/api/types'

function queryStringify(
  data: Record<string, unknown> | undefined,
  method: MethodsTypes,
): string {
  if (method === Methods.GET && data) {
    let qs = '?'
    for (const [key, value] of Object.entries(data)) {
      const param = `${key}=${value}&`
      qs += param
    }

    return qs.slice(0, -1)
  }
  return ''
}

export { queryStringify }
