export function getUser() {
  return JSON.parse(localStorage.getItem('user'))
}
export function loginAs(role) {
  localStorage.setItem('user', JSON.stringify({ role }))
}
export function logout() {
  localStorage.removeItem('user')
}