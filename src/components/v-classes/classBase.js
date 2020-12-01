class ClassBase {
  constructor (width, slug, size, options, priceFabric, priceMaterials, softness, solidWoodDrawer) {
    this.width = width
    this.slug = slug
    this.size = size
    this.options = options
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
    return Number(this.width) - Number(this.size.thicknessArmrest) * 2 // длина
  }

  C7 () {
    return Number(this.size.depth) - Number(this.size.thicknessBack) // глубина сидушки
  }

  C8 () {
    return Number(this.size.thicknessBack) // толщина спинки
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

  Q63 () {
    return Number(this.priceMaterials.foamRubber_35_42_40)
  }

  Q64 () {
    return Number(this.priceMaterials.foamRubber_30_30_40)
  }

  Q66 () {
    return Number(this.priceMaterials.foamRubberMemory_50_14_40)
  }

  Q72 () {
    return Number(this.priceMaterials.downNatural)
  }

  Q73 () {
    return Number(this.priceMaterials.calico)
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

  calcBaseTechnicalFabric () {
    return (this.C5() * this.C13() / 1000000) * this.Q68()
  }

  calcSoftness () {
    let resultPrice
    const square = this.C5() * this.C13() / 1000000
    if (this.softness === 'soft') {
      resultPrice = this.Q64() * square * 2 + this.Q66() * square
    } else if (this.softness === 'middle') {
      resultPrice = this.Q63() * square * 2 + this.Q64() * square
    } else {
      resultPrice = this.Q66() * square * 2 + this.Q64() * square
    }
    return resultPrice
  }

  G52 () {
    return this.C5() * this.C7() / 1000000
  }

  calcDownNaturalBase () {
    return this.G52() * 2 * this.Q72() + this.C5() * 2 / 1000 * this.Q73()
  }

  calcBaseNew () {
    let resultBase = 0
    if (this.options.find(item => item === 'metal_in_base')) {
      // alert('metal_in_base --- ' + this.calcMetalFrame())
      resultBase = resultBase + this.calcMetalFrame()
    }
    if (this.options.find(item => item === 'bar_in_base')) {
      // alert('bar_in_base --- ' + this.calcBar())
      resultBase = resultBase + this.calcBar()
    }
    if (this.options.find(item => item === 'tape_base')) {
      // alert('tape_base --- ' + this.calcTape())
      resultBase = resultBase + this.calcTape()
    }
    if (this.options.find(item => item === 'down_natural')) {
      // alert('BASE -- down_natural --- ' + this.calcDownNaturalBase())
      resultBase = resultBase + +this.calcDownNaturalBase()
    }
    return resultBase + this.calcBasePlywood() + this.calcFabric() + this.calcBaseTechnicalFabric() + this.calcSoftness()
  }
}

module.exports = ClassBase
