class ClassStrBack {
  constructor (width, slug, size, options, priceFabric, priceMaterials) {
    this.width = width
    this.slug = slug
    this.size = size
    this.options = options
    this.priceFabric = priceFabric
    this.priceMaterials = priceMaterials
  }

  C14 () {
    // alert('C14 -' + this.size.heightBack)
    return Number(this.size.heightBack) // высота спинки
  }

  C15 () {
    // alert('C15 -' + this.size.thicknessBack)
    return Number(this.size.thicknessBack) // толщина спинки
  }

  C23 () {
    return Number(this.size.zSideBar)
  }

  C25 () {
    return Number(this.size.seatHeight)
  }

  C5 () {
    return Number(this.width) - Number(this.size.thicknessArmrest) * 2
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

  Q71 () {
    return Number(this.priceMaterials.downSynthetic)
  }

  Q72 () {
    return Number(this.priceMaterials.downNatural)
  }

  Q73 () {
    return Number(this.priceMaterials.calico)
  }

  Q74 () {
    return Number(this.priceMaterials.zipper)
  }

  Q46 () {
    return Number(this.priceMaterials.foam_rubber_40_65_10)
  }

  Q47 () {
    return Number(this.priceMaterials.foam_rubber_40_65_20)
  }

  // Металлокаркас, м
  calcMetalFrame () {
    return ((this.C14() + this.C5()) * 2 + (this.C5() / 700 * this.C14())) / 1000 * this.Q69()
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
    let a = ((+this.C5() / 100)) / 1000
    a = a * +this.Q60()
    let fixed = (this.C5() / 100) * 2 - 2
    fixed = fixed * +this.Q70()
    return a + fixed
  }

  // натуральный пух
  calcDownNatural () {
    return +this.C5() / 1000 * 5 * +this.Q72() + +this.C5() * 2 / 1000 * +this.Q73()
  }

  // пух синтетический
  calcDownSynthetic () {
    return this.C5() / 1000 * 2 * this.Q71()
  }

  calcStrBack () {
    let result = 0
    const resultMetal = this.options.find(item => item === 'metal_in_back')
    if (resultMetal) {
      // alert('metal_in_back --- ' + this.calcMetalFrame())
      result = result + this.calcMetalFrame()
    }
    const resultBar = this.options.find(item => item === 'bar_in_back')
    if (resultBar) {
      // alert('bar_in_back --- ' + this.calcBar())
      result = result + this.calcBar()
    }
    const resultTape = this.options.find(item => item === 'tape_back')
    if (resultTape) {
      // alert('tape_back --- ' + this.calcTape())
      result = result + this.calcTape()
    }
    const resultDown = this.options.find(item => item === 'down_natural')
    if (resultDown) {
      // alert('down_natural --- ' + this.calcDownNatural())
      result = result + +this.calcDownNatural()
    } else {
      // alert('downSynthetic --- ' + this.calcDownSynthetic())
      result = result + this.calcDownSynthetic()
    }
    return result + +this.calcBackPlywood() + +this.calcAllSide() + this.calcFabric() + this.calcBackTechnicalFabric() +
      this.calcFrontFoam() + this.calcBackFoam() + this.calcTopFoam() + this.calcFrontPlywood()
  }
}
module.exports = ClassStrBack
