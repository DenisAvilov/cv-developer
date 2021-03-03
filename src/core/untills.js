export const upperFirstLiteral = (string) => {
  if (typeof string === 'string') {
  return string = string.charAt(0).toUpperCase() + string.substr(1)
  }
}
