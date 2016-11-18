export function isNone(value) {
  return (
    value === null ||
    value === undefined ||
    (isNaN(value) && value !== value) // NaN is the only js object not equal to itself.
  )
}
