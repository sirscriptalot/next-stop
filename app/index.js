import React from "react"
import ReactDOM from "react-dom"

import { Flux } from "./lib/flux"
import { ProductsIndexContainer } from "./containers/products/index"

(function main() {
  const flux        = new Flux
  const currentUser = { locale: "en-us" }

  ReactDOM.render(
    <ProductsIndexContainer
      currentUser = { currentUser }
      flux        = { flux }
    />,
    document.getElementById("app")
  )
})()


