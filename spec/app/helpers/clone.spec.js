import { clone } from "../../../app/helpers/clone"

describe("close", function () {
  it ("creates a copy of the object", function () {
    const obj       = {foo: "bar"}
    const clonedObj = clone(obj)

    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
  })
})