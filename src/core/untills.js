export const upperFirstLiteral = (string) => {
  if (typeof string === 'string') {
  return string = string.charAt(0).toUpperCase() + string.substr(1)
  }
}

// Функция для работы с localStorage
// export const storage = (key, data = null) => {
//   if (!data) {
//     return JSON.parse( localStorage.getItem(key ))
//   }
//   return localStorage.setItem(key, JSON.stringify(data))
// }


