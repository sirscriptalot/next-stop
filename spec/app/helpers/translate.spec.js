import { makeTranslate } from "../../../app/helpers/translate"

const locales = {
    "en-us": {
      foo: {
        bar: {
          bat: "baz"
        }
      },
      goodbye: "goodbye",
      money: ({ value }) => `$${value}`
    },

    "en-gb": {
      goodbye: "cheerio",
    },
}

const translate = makeTranslate(locales)

describe("translate", function () {
  it ("returns different values for different locales", function () {
    expect(translate("en-us", "goodbye")).toEqual("goodbye")
    expect(translate("en-gb", "goodbye")).toEqual("cheerio")
  })

  it ("returns value for nested paths", function() {
    expect(translate("en-us", "foo.bar.bat")).toEqual("baz")
  })

  it ("allows functions to be used as templates", function () {
    expect(translate("en-us", "money", { value: 100 })).toEqual("$100")
  })
})
