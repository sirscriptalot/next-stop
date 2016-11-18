"use strict";

jest.dontMock("../../../app/lib/queue")

import { Queue } from "../../../app/lib/queue"

describe("Queue", function () {
  describe("#constructor", function () {
    it("sets _values", function () {
      const values = [1, 2, 3]
      const queue  = new Queue(values)

      expect(queue._values).toBe(values)
    })

    it("sets _values to [] with default arguments", function () {
      const queue = new Queue

      expect(queue._values).toEqual([])
    })
  })

  describe("#length", function () {
    it("returns the length of _values", function () {
      const queue = new Queue([1, 2, 3])

      expect(queue.length).toEqual(3)
    })
  })

  describe("#add", function () {
    it("adds value to the END of _values", function() {
      const queue = new Queue([1, 2, 3])

      queue.add(4)
      expect(queue.last()).toEqual(4)
    })
  })

  describe("#remove", function () {
    it("removes value from the START of _values", function() {
      const queue = new Queue([1, 2, 3])

      expect(queue.remove()).toEqual(1)
    })
  })

  describe("#first", function () {
    it("returns the first value in _values", function () {
      const queue = new Queue([1, 2, 3])

      expect(queue.first()).toEqual(1)
    })
  })

  describe("#last", function () {
    it("returns the last value in _values", function () {
      const queue = new Queue([1, 2, 3])

      expect(queue.last()).toEqual(3)
    })
  })
})
