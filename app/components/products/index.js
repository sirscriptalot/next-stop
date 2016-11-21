import React from "react"
// import { ProductList } from "./_list"
import { translate as t } from "../../helpers/translate"

export function ProductIndex({ currentUser, products }) {
  const title = t(currentUser.locale, "products.index.title")

  return (
    <section>
      <h1>{ title }</h1>
    </section>
  )
}
