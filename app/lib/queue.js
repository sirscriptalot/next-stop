export class Queue {
  constructor(values = []) {
    this._values = values
  }

  get length() {
    return this._values.length
  }

  add(value) {
    this._values.push(value)
  }

  remove() {
    return this._values.shift()
  }

  first() {
    return this._values[0]
  }

  last() {
    return this._values[this.length - 1]
  }

  isEmpty() {
    return this._values.length === 0
  }
}
