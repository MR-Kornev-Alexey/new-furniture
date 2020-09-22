class BasicCalculation {
  constructor (totalWidth, widthArmrest, heightArmrest, thicknessArmrest, zSideBarBackrest,
    thicknessBackrest, heightBackrest, technologicalGap,
    numberOfArmrests, fabricStock, seatHeight, numberOfPillows, backCushionThickness,
    backCushionHeight, metalFrame, solidWoodDrawer) {
    this.totalWidth = totalWidth
    this.widthArmrest = widthArmrest
    this.heightArmrest = heightArmrest
    this.thicknessArmrest = thicknessArmrest
    this.zSideBarBackrest = zSideBarBackrest
    this.thicknessBackrest = thicknessBackrest
    this.heightBackrest = heightBackrest
    this.technologicalGap = technologicalGap
    this.numberOfArmrests = numberOfArmrests
    this.fabricStock = fabricStock
    this.seatHeight = seatHeight
    this.numberOfPillows = numberOfPillows
    this.backCushionThickness = backCushionThickness
    this.backCushionHeight = backCushionHeight
    this.metalFrame = metalFrame
    this.solidWoodDrawer = solidWoodDrawer
  }

  calcLengthBackrest (totalWidth, thicknessArmrest, numberOfArmrests, technologicalGap) {
    return totalWidth - thicknessArmrest * numberOfArmrests - technologicalGap * numberOfArmrests
  }

  static totalRibs (lengthBackrest) {
    return Math.ceil(lengthBackrest / 50)
  }

  // 1 подлокотник фанера
  calculate01 (plywood4, plywood9) {
    const a = (this.widthArmrest * this.heightArmrest * this.numberOfArmrests * plywood4 + this.heightArmrest * this.thicknessArmrest * 2 * this.numberOfArmrests * plywood9 + this.widthArmrest * this.thicknessArmrest * this.numberOfArmrests * plywood9) / 1000000
    return Math.floor(a)
  }

  // Брусок подлокотник,м
  calculate02 (bar30x40) {
    let a = 0
    a = this.thicknessArmrest > 100 ? 2 : 1
    return (((this.widthArmrest * a + this.heightArmrest * a)) * this.numberOfArmrests / 1000) * bar30x40
  }

  // Фанера основание
  calculate03 (plywood15, lengthBackrest, ribs) {
    return (((this.widthArmrest - this.thicknessBackrest - this.technologicalGap) * this.zSideBarBackrest * 2 +
                         this.zSideBarBackrest * lengthBackrest * 2 +
                         ribs * this.zSideBarBackrest * (this.widthArmrest - this.thicknessBackrest - this.technologicalGap) +
                         lengthBackrest * 100 * 4) / 1000000) * plywood15
  }

  // Фанера спинка
  calculate04 (plywood15, lengthBackrest, ribs) {
    return ((this.heightBackrest * this.thicknessBackrest * 2 * ribs + this.thicknessBackrest * lengthBackrest * 2) / 1000000) * plywood15
  }

  // Оргалит подлокотник
  calculate05 (hardboard) {
    return ((this.widthArmrest * this.heightArmrest * this.numberOfArmrests) / 1000000) * hardboard
  }

  // Оргалит зад
  calculate06 (hardboard, lengthBackrest) {
    return ((this.heightArmrest * lengthBackrest) / 1000000) * hardboard
  }

  // Фанера спинка (облакачиваемся)
  calculate07 (plywood9, lengthBackrest) {
    return (((this.heightArmrest - this.zSideBarBackrest) * lengthBackrest) / 1000000) * plywood9
  }

  // Металлокаркас, м
  calculate08 (metallicProfile) {
    const a = Math.ceil((this.widthArmrest * (2 + Math.floor(this.totalWidth / 1000)) + this.totalWidth * 2) / 1000)
    if (this.metalFrame === 1) {
      return a * metallicProfile
    }
    return 0
  }

  // Царга из массива
  calculate09 () {
    const a = Math.ceil((this.totalWidth * 2 + this.widthArmrest * 2) * 1.3 / 1000)
    if (this.metalFrame === 1) {
      return a * 8600
    }
    return 0
  }

  // поролон подлокотник
  calculate10 (foamRubber20) {
    return (((this.widthArmrest * this.heightArmrest + this.thicknessArmrest * this.heightArmrest * 2 + this.thicknessArmrest * this.widthArmrest +
      (this.heightArmrest - this.zSideBarBackrest) * this.widthArmrest) * this.numberOfArmrests) / 1000000) * foamRubber20
  }

  totalCalculate (hardboard, plywood4, plywood9, plywood15, bar30x40, foamRubber20, metallicProfile) {
    const lengthBackrest = this.calcLengthBackrest(this.totalWidth, this.thicknessArmrest, this.numberOfArmrests, this.technologicalGap)
    const ribs = 2
    return this.calculate01(plywood4, plywood9) + this.calculate02(bar30x40) +
           this.calculate03(plywood15, lengthBackrest, ribs) + this.calculate04(plywood15, lengthBackrest, ribs) +
           this.calculate05(hardboard) + this.calculate06(hardboard, lengthBackrest) + this.calculate07(plywood9, lengthBackrest) +
           this.calculate08(metallicProfile) + this.calculate09() + this.calculate10(foamRubber20)
  }
}

module.exports = BasicCalculation
