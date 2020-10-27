class ClassCommon {
  constructor (common) {
    this.common = common
  }

  calcOther () {
    return Number(this.common.theNut) * 10 + Number(this.common.holcon20) * 6.3 + Number(this.common.foamGlue) * 1.5
  }
}
module.exports = ClassCommon
