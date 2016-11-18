jest.dontMock("../../../app/lib/flux")

import { isNone } from "../../../app/helpers/is-none"
import { isSome } from "../../../app/helpers/is-some"
import { Flux } from "../../../app/lib/flux"

class MockContainer {
  constructor() {
    this.containerName  = "MockContainer"
    this.state = null
  }

  setState(obj) {
    this.state = obj
  }
}

describe("Flux", function () {
  let flux

  beforeEach(function () {
    flux = new Flux
  })

  describe("#constructor", function () {
    it("initializes a new ContainerStore", function () {
      expect(isSome(flux._containers)).toEqual(true)
    })

    it("initializes a new Queue", function () {
      expect(isSome(flux._queue)).toEqual(true)
    })

    it("initializes a new state Stack with initialState", function () {
      const initialState = {foo: "bar"}
      const flux         = new Flux(initialState)

      expect(flux._currentState).toBe(initialState)
    })
  })

  describe("#addContainer", function () {
    it("adds container to the ContainerStore", function () {
      const container = new MockContainer

      flux.addContainer(container)

      const test = flux._containers._containers[container.containerName]

      expect(test).toBe(container)
    })
  })

  describe("#removeContainer", function () {
    it("removes container to the ContainerStore", function () {
      const container = new MockContainer

      flux.removeContainer(container)

      const test = flux._containers._containers[container.containerName]

      expect(isNone(test)).toEqual(true)
    })
  })

  describe("#dispatch", function () {
    it("calls setState on each container with the nextState", function () {
      const fooContainer  = new MockContainer
      const barContainer  = new MockContainer
      const nextState     = {baz: "bat"}

      function mockHandler(_, payload) {
        return payload // Would typically return nextState.
      }

      flux.addContainer(fooContainer)
      flux.addContainer(barContainer)
      flux.dispatch(mockHandler, nextState)

      for (const containerName in flux._containers._containers) {
        const container = flux._containers._containers[containerName]

        expect(container.state).toBe(nextState)
      }
    })
  })
})
