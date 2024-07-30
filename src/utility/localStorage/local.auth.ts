/* eslint-disable @typescript-eslint/no-explicit-any */
export const setTokens = (accessToken: string|any, refreshToken: string|any) => {
  localStorage.setItem('token', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}

export const clearTokens = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')
}
export const getToken = (name:string) => {
  return localStorage.getItem(name)
}