const locales = {
  "en-us": {
    products: {
      index: {
        title: "Products Index"
      }
    }
  }
}

export function makeTranslate(locales) {
  return function (locale, path, args = {}) {
    let   template = locales[locale]
    const keys     = path.split('.')

    for (let key of keys) {
      template = template[key]
    }

    switch (typeof template) {
      case 'string':
        return template
      case 'function':
        return template.call(this, args)
    }
  }
}

export const translate = makeTranslate(locales)
