import { Queue } from './queue'
import { Stack } from './stack'
import { clone } from '../helpers/clone'

class ContainerStore {
  constructor(containers = {}) {
    this._containers = containers
  }

  add(container) {
    const { containerName }         = container
    this._containers[containerName] = container
  }

  remove({ containerName }) {
    delete this._containers[containerName]
  }

  updateEachWith(nextState) {
    for (const containerName in this._containers) {
      const container = this._containers[containerName]

      container.setState(nextState)
    }
  }
}

export class Flux {
  constructor(initialState = {}) {
    this._containers = new ContainerStore
    this._queue      = new Queue
    this._states     = new Stack([initialState])
  }

  get _currentState() {
    return this._states.last()
  }

  addContainer(container) {
    this._containers.add(container)
  }

  removeContainer(container) {
    this._containers.remove(container)
  }

  dispatch(handler, payload) {
    this._queue.add({ handler, payload })
    this._handleActionsFromQueueUntilEmpty()
  }

  _handleActionsFromQueueUntilEmpty() {
    if (this._queue.isEmpty()) { return }

    const { handler, payload } = this._queue.remove()
    const nextState            = handler(this._makeNextState(), payload)

    this._containers.updateEachWith(nextState)
    this._handleActionsFromQueueUntilEmpty()
  }

  _makeNextState() {
    return clone(this.currentState)
  }
}
