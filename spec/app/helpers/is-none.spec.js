import { isNone } from "../../../app/helpers/is-none"

describe("isNone", function () {
  it ("returns true if the value is nothing", function () {
    expect(isNone(null)).toEqual(true)
    expect(isNone(undefined)).toEqual(true)
    expect(isNone(NaN)).toEqual(true)
    expect(isNone(false)).toEqual(false)
    expect(isNone([])).toEqual(false)
    expect(isNone({})).toEqual(false)
    expect(isNone(1)).toEqual(false)
    expect(isNone("Foo")).toEqual(false)
  })
})