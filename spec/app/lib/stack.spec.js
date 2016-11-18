jest.dontMock("../../../app/lib/stack")

import { Stack } from "../../../app/lib/stack"

describe("Stack", function () {
  describe("#constructor", function () {
    it("sets _values", function () {
      const values = [1, 2, 3]
      const stack  = new Stack(values)

      expect(stack._values).toBe(values)
    })

    it("sets _values to [] with default arguments", function () {
      const stack = new Stack

      expect(stack._values).toEqual([])
    })
  })

  describe("#push", function () {
    it("pushed value to the END of _values", function() {
      const stack = new Stack([1, 2, 3])

      stack.push(4)
      expect(stack.last()).toEqual(4)
    })
  })

  describe("#remove", function () {
    it("pops value from the END of _values", function() {
      const stack = new Stack([1, 2, 3])

      expect(stack.pop()).toEqual(3)
    })
  })

  describe("#first", function () {
    it("returns the first value in _values", function () {
      const stack = new Stack([1, 2, 3])

      expect(stack.first()).toEqual(1)
    })
  })

  describe("#last", function () {
    it("returns the last value in _values", function () {
      const stack = new Stack([1, 2, 3])

      expect(stack.last()).toEqual(3)
    })
  })
})
