import { BuildPropertyParser, PageObject, PropertyObject, PropertyParseRules } from './type'

const runParse = (rules: PropertyParseRules, page: PageObject) => {
  const properties: PropertyObject[] = []
  const find = (key: keyof typeof rules) => {
    return properties.find((property) => property.type === key)
  }
  return { find }
}

const buildPagePropertyParser: BuildPropertyParser = (rules) => {
  return {
    parse: (page) => runParse(rules, page),
  }
}

const rules: PropertyParseRules = {
  title: 'title',
}
const parser = buildPagePropertyParser(rules)
const properties = parser.parse(page)
console.log(properties.find('title'))
