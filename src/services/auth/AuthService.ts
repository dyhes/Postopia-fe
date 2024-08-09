import { post } from '../request';

export async function signup(body: AuthInfo) {
  return post<void>('/api/auth/signup', body);
}

export async function login(body: AuthInfo) {
  return post<Token>('/api/auth/login', body);
}
