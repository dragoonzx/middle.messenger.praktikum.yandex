import { MethodsTypes, Methods } from '../api/types'

function queryStringify(
  data: Record<string, unknown>,
  method: MethodsTypes,
): string {
  if (method === Methods.GET && data) {
    let qs = ''
    for (const [key, value] of Object.entries(data)) {
      const param = `${key}=${value}&`
      qs += param
    }

    return qs.slice(0, -1)
  }
  return ''
}

export { queryStringify }
