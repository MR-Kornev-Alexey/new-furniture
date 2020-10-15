class ClassArmrest {
  constructor (slug, size, metalFrame, bar, tape, priceFabric, priceMaterials) {
    this.slug = slug
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

  Q40 () {
    return Number(this.priceMaterials.hardboard)
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

  Q45 () {
    return Number(this.priceMaterials.bar_30_40)
  }

  Q60 () {
    return Number(this.priceMaterials.ribbon_60)
  }

  Q68 () {
    return Number(this.priceMaterials.theFelt)
  }

  Q69 () {
    return Number(this.priceMaterials.metallicProfile)
  }

  Q70 () {
    return Number(this.priceMaterials.fasteningTape)
  }

  Q46 () {
    return Number(this.priceMaterials.foam_rubber_40_65_10)
  }

  Q47 () {
    return Number(this.priceMaterials.foam_rubber_40_65_20)
  }

  // Подлокотник внешняя часть
  squareArmrestOuter () {
    return this.C19() * this.C20() / 1000000
  }

  // фанера
  calcArmrestOuterPlywood () {
    return this.squareArmrestOuter() * this.Q41()
  }

  // поролон
  calcArmrestOuterFoam () {
    return this.squareArmrestOuter() * this.Q46()
  }

  // Подлокотник внутренняя часть
  squareArmrestInner () {
    return this.C19() * this.C20() / 1000000
  }

  // фанера
  calcArmrestInnerPlywood () {
    return this.squareArmrestInner() * this.Q42()
  }

  // поролон
  calcArmrestInnerFoam () {
    const squareZarga = Number(this.size.zSideBar) * Number(this.size.width) / 1000000
    const a = (this.squareArmrestInner() - squareZarga) * this.Q47()
    return a
  }

  // Подлокотник верх
  squareArmrestTop () {
    return this.C19() * this.C21() / 1000000
  }

  // фанера
  calcArmrestTopPlywood () {
    return this.squareArmrestTop() * this.Q43()
  }

  // поролон
  calcArmrestTopFoam () {
    return this.squareArmrestTop() * this.Q47()
  }

  // Подлокотник перед
  squareArmrestFront () {
    return this.C20() * this.C21() / 1000000
  }

  // фанера
  calcArmrestFrontPlywood () {
    return this.squareArmrestFront() * this.Q41()
  }

  // поролон
  calcArmrestFrontFoam () {
    return this.squareArmrestFront() * this.Q46()
  }

  // Подлокотник зад
  squareArmrestBack () {
    return this.C20() * this.C21() / 1000000
  }

  // фанера
  calcArmrestBackPlywood () {
    return this.squareArmrestBack() * this.Q41()
  }

  // поролон
  calcArmrestBackFoam () {
    return this.squareArmrestBack() * this.Q46()
  }

  // Техническая ткань
  squareTechnicalFabric () {
    return this.C19() * this.C20() / 1000000
  }

  calcTechnicalFabric () {
    return this.squareTechnicalFabric() * this.Q68()
  }

  // Ткань
  squareFabric () {
    return (this.C20() * 2 + this.C21() * 3) / 1000
  }

  calcFabric () {
    return this.squareFabric() * Number(this.priceFabric)
  }

  // Металлокаркас, м
  calcMetalFrame () {
    return ((this.C19() + this.C20()) * 2 / 1000) * this.Q69()
    // size ??? number
  }

  // Брусок
  sizeBar () {
    if (this.C21() < 60) {
      return (this.C19() + this.C20()) * 2 / 1000 // ??????
    } else {
      return (this.C19() + this.C20() + this.C21()) * 4 / 1000 // ??????
    }
  }

  calcBar () {
    return this.sizeBar() * this.Q45()
  }

  // Лента
  // Креплений ленты
  calcTape () {
    let a = ((+this.C19() / 100) * +this.C20() + (+this.C20() / 100) * +this.C19()) / 1000
    a = a * +this.Q60()
    let fixed = (this.C19() / 100) * 2 - 2
    fixed = fixed * +this.Q70()
    return a + fixed
  }

  // расчет по фанере
  calcPlywood () {
    return +this.calcArmrestTopPlywood() +
    +this.calcArmrestFrontPlywood() +
    +this.calcArmrestBackPlywood() +
    +this.calcArmrestOuterPlywood()
  }
  // расчет по оргалиту

  calcHardboard () {
    return +this.squareArmrestInner() * +this.Q40()
  }
  // Расчет по поролону

  calcFoam () {
    return +this.calcArmrestOuterFoam() +
      +this.calcArmrestInnerFoam() +
      +this.calcArmrestTopFoam() +
      +this.calcArmrestFrontFoam() +
      +this.calcArmrestBackFoam()
  }

  // общий расчет
  // общий расчет
  calcArmrest () {
    let result = 0
    if (this.slug === 'magnum2') {
      result = result + this.calcHardboard()
    } else {
      result = result + this.calcArmrestInnerPlywood()
    }
    if (this.bar) {
      result = result + this.calcBar()
    } else {
      result = result + this.calcMetalFrame()
    }
    return result + this.calcPlywood() + this.calcFoam() + this.calcFabric() + this.calcTape() + this.calcTechnicalFabric()
  }
}
module.exports = ClassArmrest
