import { request } from '@umijs/max';

export async function post<T>(url: string, body: any): Promise<APIRes<T>> {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
