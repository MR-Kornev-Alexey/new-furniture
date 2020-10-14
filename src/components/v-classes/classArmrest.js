class ClassArmrest {
  constructor (size, metalFrame, bar, tape, priceFabric, priceMaterials) {
    this.size = size
    this.metalFrame = metalFrame
    this.bar = bar
    this.tape = tape
    this.priceFabric = priceFabric
    this.priceMaterials = priceMaterials
  }

  C19 () {
    return Number(this.size.width)
  }

  C20 () {
    return Number(this.size.height)
  }

  C21 () {
    return Number(this.size.thickness)
  }

  Q41 () {
    return Number(this.priceMaterials.plywood_4)
  }

  Q42 () {
    return Number(this.priceMaterials.plywood_9)
  }

  Q43 () {
    return Number(this.priceMaterials.plywood_15)
  }

  Q68 () {
    return Number(this.priceMaterials.theFelt)
  }

  Q46 () {
    return Number(this.priceMaterials.foam_rubber_40_65_10)
  }

  Q47 () {
    return Number(this.priceMaterials.foam_rubber_40_65_20)
  }

  // Подлокотник внешняя часть
  squareArmrestOuter () {
    return (this.C19() * this.C20() / 1000000).toFixed(1)
  }

  // фанера
  calcArmrestOuterPlywood () {
    return (this.squareArmrestOuter() * this.Q41()).toFixed(1)
  }

  // поролон
  calcArmrestOuterFoam () {
    return (this.squareArmrestOuter() * this.Q46()).toFixed(1)
  }

  // Подлокотник внутренняя часть
  squareArmrestInner () {
    return (this.C19() * this.C20() / 1000000).toFixed(1)
  }

  // фанера
  calcArmrestInnerPlywood () {
    return (this.squareArmrestInner() * this.Q42()).toFixed(1)
  }

  // поролон
  calcArmrestInnerFoam () {
    return (this.squareArmrestInner() * this.Q47()).toFixed(1)
  }

  // Подлокотник верх
  squareArmrestTop () {
    return (this.C19() * this.C21() / 1000000).toFixed(1)
  }

  // фанера
  calcArmrestTopPlywood () {
    return (this.squareArmrestTop() * this.Q43()).toFixed(1)
  }

  // поролон
  calcArmrestTopFoam () {
    return (this.squareArmrestTop() * this.Q47()).toFixed(1)
  }

  // Подлокотник перед
  squareArmrestFront () {
    return (this.C20() * this.C21() / 1000000).toFixed(1)
  }

  // фанера
  calcArmrestFrontPlywood () {
    return (this.squareArmrestFront() * this.Q41()).toFixed(1)
  }

  // поролон
  calcArmrestFrontFoam () {
    return (this.squareArmrestFront() * this.Q46()).toFixed(1)
  }

  // Подлокотник зад
  squareArmrestBack () {
    return (this.C20() * this.C21() / 1000000).toFixed(1)
  }

  // фанера
  calcArmrestBackPlywood () {
    return (this.squareArmrestBack() * this.Q41()).toFixed(1)
  }

  // поролон
  calcArmrestBackFoam () {
    return (this.squareArmrestBack() * this.Q46()).toFixed(1)
  }

  // Техническая ткань
  squareTechnicalFabric () {
    return (this.C19() * this.C20() / 1000000).toFixed(1)
  }

  calcTechnicalFabric () {
    return (this.squareTechnicalFabric() * this.Q68()).toFixed(1)
  }

  // Ткань
  squareFabric () {
    return ((this.C20() * 2 + this.C21() * 3) / 1000).toFixed(1)
  }

  // Металлокаркас, м
  calcMetalFrame () {
    const as = (this.C19() + this.C20()) * 2 / 1000
    return as.toFixed(1)
  }
  // Брусок

  calcBar () {
    const a = (this.C19() + this.C20() + this.C21()) * 4 / 1000
    return a.toFixed(1)
  }

  // Лента
  // Креплений ленты
  calcTape () {
    const a = (this.C19 / 100 * this.C20 + this.C20 / 100 * this.C19) / 1000
    alert(a)
    const fixed = (this.C19 / 100) * 2 - 2
    return fixed.toFixed(1)
  }

  calcArmrest () {
    return this.squareFabric()
  }
}
module.exports = ClassArmrest
