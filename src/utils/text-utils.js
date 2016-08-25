export function classNamesToObject(className) {
  const obj = {}
  className
    .split(' ')
    .forEach(className => !!className && (obj[className] = true))
  return obj
}
