class ListConfigurationSofas {
  constructor (id, length, width, haveSideAdd, haveOttoman, colorFabric, mechanism, legs, softness, basicCalculation, formula) {
    this.id = id
    this.length = length
    this.width = width
    this.haveSideAdd = haveSideAdd
    this.haveOttoman = haveOttoman
    this.colorFabric = colorFabric
    this.mechanism = mechanism
    this.legs = legs
    this.softness = softness
    this.formula = formula
  }

  calculate (length, width, basicCalculation) {
    return this.formula(length, width, basicCalculation)
  }
}

module.exports = ListConfigurationSofas
