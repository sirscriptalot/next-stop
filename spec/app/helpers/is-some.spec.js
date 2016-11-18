import { isSome } from "../../../app/helpers/is-some"

describe("isSome", function () {
  it ("returns true if the value is something", function () {
    expect(isSome(null)).toEqual(false)
    expect(isSome(undefined)).toEqual(false)
    expect(isSome(NaN)).toEqual(false)
    expect(isSome(false)).toEqual(true)
    expect(isSome([])).toEqual(true)
    expect(isSome({})).toEqual(true)
    expect(isSome(1)).toEqual(true)
    expect(isSome("Foo")).toEqual(true)
  })
})