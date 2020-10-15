class ClassBack {
  constructor (slug, size, metalFrame, bar, tape, priceFabric, priceMaterials) {
    this.slug = slug
    this.size = size
    this.metalFrame = metalFrame
    this.bar = bar
    this.tape = tape
    this.priceFabric = priceFabric
    this.priceMaterials = priceMaterials
  }

  C14 () {
    return Number(this.size.heightBack) // высота спинки
  }

  C15 () {
    return Number(this.size.thicknessBack) // толщина спинки
  }

  C17 () {
    return Number(this.size.backCushionHeight)
  }

  C23 () {
    return Number(this.size.zSideBar)
  }

  C25 () {
    return Number(this.size.seatHeight)
  }

  C5 () {
    return Number(this.size.totalLength) - Number(this.size.thicknessArmrest) * 2
  }

  RIBS () {
    return Math.ceil(this.C5() / 1000)
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

  // фанера спинка боковые части
  calcAllSide () {
    return ((this.C14() * this.C15() * 2 + this.C14() * this.C15() * this.RIBS() + this.C5() * this.C15() * 2) / 1000000) * this.Q43()
  }
  // Оргалит зад спинка

  calcBackHardboard () {
    return (this.C5() * this.C14() / 1000000) * this.Q40()
  }

  // фанера зад спинка

  calcBackPlywood () {
    return (this.C5() * this.C14() / 1000000) * this.Q41()
  }

  // Фанера спинка (облакачиваемся)(внутренняя часть)
  calcFrontPlywood () {
    return (this.C5() * (this.C14() - this.C23() - this.C25()) / 1000000) * this.Q42()
  }

  // поролон верхняя часть
  calcTopFoam () {
    return (this.C5() * this.C15() / 1000000) * this.Q46()
  }

  // поролон зад спинка

  calcBackFoam () {
    return (this.C5() * this.C14() / 1000000) * this.Q46()
  }

  // поролон внутрення часть
  calcFrontFoam () {
    return (this.C5() * (this.C14() - this.C23() - this.C25()) / 1000000) * this.Q47()
  }

  // Техническая ткань

  calcBackTechnicalFabric () {
    return (this.C5() * this.C14() / 1000000) * this.Q68()
  }

  // Ткань
  lengthBackFabric () {
    return this.C5() / 1000
  }

  calcFabric () {
    return this.lengthBackFabric() * Number(this.priceFabric)
  }

  // Металлокаркас, м
  calcMetalFrame () {
    return ((this.C14() + this.C5()) * 2 + (this.C5() / 700 * this.C14())) / 1000 * this.Q69()
  }

  // Брусок
  sizeBar () {
    return this.C5() * 2 / 1000
  }

  calcBar () {
    return this.sizeBar() * this.Q45()
  }

  // Лента
  // Креплений ленты
  calcTape () {
    let a = ((+this.C5() / 100) * +this.C17()) / 1000
    a = a * +this.Q60()
    let fixed = (this.C5() / 100) * 2 - 2
    fixed = fixed * +this.Q70()
    return a + fixed
  }

  calcBase () {
    let result = 0
    if (this.slug === 'magnum2') {
      result = result + this.calcBackHardboard()
    } else {
      result = result + this.calcBackPlywood()
    }
    if (this.bar) {
      result = result + this.calcBar()
    } else {
      result = result + this.calcMetalFrame()
    }
    return result + this.calcTape() + this.calcAllSide() + this.calcFabric() + this.calcBackTechnicalFabric() +
                    this.calcFrontFoam() + this.calcBackFoam() + this.calcTopFoam() + this.calcFrontPlywood()
  }
}
module.exports = ClassBack
