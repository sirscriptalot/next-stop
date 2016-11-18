import React from "react"
import { Container } from "../../lib/container"
import { ProductIndex } from "../../components/products/index"

export class ProductsIndexContainer extends Container {
  render() {
    return (
      <ProductIndex currentUser = { this.props.currentUser } />
    )
  }
}
