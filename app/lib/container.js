import React from "react"

export class Container extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.flux = props.flux
  }

  componentDidMount() {
    this.flux.addContainer(this)
  }

  componentWillUnmount() {
    this.flux.removeContainer(this)
  }
}
