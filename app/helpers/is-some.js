import { isNone } from "./is-none"

export function isSome(value) {
  return !isNone(value)
}
