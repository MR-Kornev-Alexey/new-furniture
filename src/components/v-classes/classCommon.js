class ClassCommon {
  constructor (width, size, options, common) {
    this.width = width
    this.size = size
    this.options = options
    this.common = common
  }

  C5 () {
    return Number(this.width) - Number(this.size.thicknessArmrest) * 2
  }

  C20 () {
    return Number(this.size.width) * 2
  }

  calcNutsArmrest () {
    let resultArmrest = 0
    if (this.options.find(item => item === 'left_armrest')) {
      resultArmrest = resultArmrest + +this.common.theBolt * 3 + +this.common.theNut * 3
    }
    if (this.options.find(item => item === 'right_armrest')) {
      resultArmrest = resultArmrest + +this.common.theBolt * 3 + +this.common.theNut * 3
    }
    return resultArmrest
  }

  calcNutsBack () {
    return Math.ceil(this.width / 2 / 1000) * (+this.common.theBolt + +this.common.theNut)
  }

  calcHalcon () {
    return (this.C5() + this.C20()) / 1000 * +this.common.holcon_20
  }

  calcOther () {
    return this.calcNutsArmrest() + this.calcNutsBack() + this.calcHalcon() + Number(this.common.foamGlue) * 1.5
  }
}
module.exports = ClassCommon
