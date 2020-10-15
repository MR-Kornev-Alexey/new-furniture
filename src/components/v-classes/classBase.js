class ClassBase {
  constructor (slug, size, metalFrame, bar, tape, priceFabric, priceMaterials, softness, solidWoodDrawer) {
    this.slug = slug
    this.size = size
    this.metalFrame = metalFrame
    this.bar = bar
    this.tape = tape
    this.priceFabric = priceFabric
    this.priceMaterials = priceMaterials
    this.softness = softness
    this.solidWoodDrawer = solidWoodDrawer
  }

  C23 () {
    return Number(this.size.zSideBar)// царга
  }

  C19 () {
    return Number(this.size.depth) // глубина
  }

  C5 () {
    return Number(this.size.totalLength) - Number(this.size.thicknessArmrest) * 2 // длина
  }

  C8 () {
    return Number(this.size.thicknessBack)
  }

  C13 () {
    return Number(this.size.depth) - Number(this.size.thicknessBack)
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

  // Металлокаркас, м
  calcMetalFrame () {
    return ((this.C19() + this.C5()) * 2 + (this.C5() / 1000 * this.C19())) / 1000 * this.Q69()
  }

  // Брусок
  sizeBar () {
    return ((this.C19() + this.C5()) * 2 + (this.C5() / 1000 * this.C19())) / 1000
  }

  calcBar () {
    return this.sizeBar() * this.Q45()
  }

  calcBasePlywood () {
    return ((this.C23() + 100) * (this.C13() * 2 + this.C5() * 2) / 1000000) * this.Q43()
  }

  // Лента
  // Креплений ленты
  calcTape () {
    let a = ((+this.C5() / 100) * +this.C19()) / 1000
    a = a * +this.Q60()
    let fixed = (this.C5() / 100) * 2 - 2
    fixed = fixed * +this.Q70()
    return a + fixed
  }

  // Ткань
  lengthBackFabric () {
    return (this.C5() + 160 * 2) / 1000
  }

  calcFabric () {
    return this.lengthBackFabric() * Number(this.priceFabric)
  }

  calcBase () {
    let result = 0
    if (this.bar) {
      result = result + this.calcBar()
    } else {
      result = result + this.calcMetalFrame()
    }
    return result + this.calcTape() + this.calcBasePlywood() + this.calcFabric()
  }
}
module.exports = ClassBase
