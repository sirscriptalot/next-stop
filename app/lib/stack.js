export class Stack {
  constructor(values = []) {
    this._values = values
  }

  get length() {
    return this._values.length
  }

  push(value) {
    this._values.push(value)
  }

  pop() {
    return this._values.pop()
  }

  first() {
    return this._values[0]
  }

  last() {
    return this._values[this.length - 1]
  }
}
