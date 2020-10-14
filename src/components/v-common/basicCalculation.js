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

  // static totalRibs (lengthBackrest) {
  //   return Math.ceil(lengthBackrest / 50)
  // }

  calcLengthBackrest (totalWidth, thicknessArmrest, numberOfArmrests, technologicalGap) {
    return totalWidth - thicknessArmrest * numberOfArmrests - technologicalGap * numberOfArmrests
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
    if (this.solidWoodDrawer === 1) {
      return a * 8600
    }
    return 0
  }

  // поролон подлокотник
  calculate10 (foamRubber20) {
    const setSum10 = (((this.widthArmrest * this.heightArmrest + this.thicknessArmrest * this.heightArmrest * 2 + this.thicknessArmrest * this.widthArmrest +
      (this.heightArmrest - this.zSideBarBackrest) * this.widthArmrest) * this.numberOfArmrests) / 1000000)
    const localPrice10 = setSum10 * foamRubber20

    return { setSum: setSum10, localPrice: localPrice10 }
  }

  // поролон царга
  calculate11 (lengthBackrest, foamRubber40x65x20) {
    const setSum11 = (this.zSideBarBackrest * lengthBackrest) / 1000000
    const localPrice11 = setSum11 * foamRubber40x65x20
    return { setSum: setSum11, localPrice: localPrice11 }
  }

  // поролон спинка
  calculate12 (lengthBackrest, foamRubber30x30x40) {
    const setSum12 = ((this.heightBackrest * lengthBackrest + this.thicknessBackrest * lengthBackrest + ((this.heightBackrest - this.zSideBarBackrest) * lengthBackrest)) / 1000000)
    const localPrice12 = setSum12 * foamRubber30x30x40
    return { setSum: setSum12, localPrice: localPrice12 }
  }

  // поролон основание 30-40
  calculate13 (lengthBackrest, foamRubber35x42x40) {
    const setSum13 = (lengthBackrest * (this.widthArmrest - this.thicknessBackrest) / 1000000)
    const localPrice13 = setSum13 * foamRubber35x42x40
    return { setSum: setSum13, localPrice: localPrice13 }
  }

  // поролон основание 18-25
  calculate14 (lengthBackrest, foamRubber30x30x40) {
    return ((lengthBackrest * (this.widthArmrest - this.thicknessBackrest)) / 1000000) * foamRubber30x30x40
  }

  // поролон мемори
  calculate15 (lengthBackrest, foamRubberMemory50x14x40) {
    return ((lengthBackrest * (this.widthArmrest - this.thicknessBackrest)) / 1000000) * foamRubberMemory50x14x40
  }

  // Холкон
  calculate16 (sum10For13, holcon20) {
    return sum10For13 * holcon20
  }

  // Ткань подлокотник
  calculate17 (theCloth) {
    const result = (Number(this.heightArmrest) + Number(this.thicknessArmrest * 3) + Number(this.heightArmrest - this.zSideBarBackrest) + Number(this.fabricStock * 5)) * this.numberOfArmrests / 1000
    return result * theCloth
  }

  // Ткань основание
  calculate18 (lengthBackrest, theCloth) {
    return ((lengthBackrest + this.seatHeight * 2 * this.numberOfPillows) / 1000) * theCloth
  }

  // Ткань Спинка
  calculate19 (lengthBackrest, theCloth) {
    return ((lengthBackrest + Number(this.fabricStock)) / 1000) * theCloth
  }

  // Подушка спина
  calculate20 (lengthBackrest, ratchetMechanism) {
    let result
    const a = 1400 / (Number(this.backCushionHeight) + Number(this.backCushionThickness) + Number(this.fabricStock))
    if (a > 2) {
      result = lengthBackrest
    } else {
      result = lengthBackrest * 2 + this.backCushionThickness * 2 * this.numberOfPillows
    }
    return (result / 1000) * ratchetMechanism
  }

  // Задняя часть
  calculate21 (lengthBackrest, spandBond) {
    return lengthBackrest / 1000 * spandBond
  }

  // Гайки
  calculate22 (theNut) {
    return theNut * 10
  }

  // лента
  calculate23 (lengthBackrest, ribbon60) {
    return ((lengthBackrest / 100 - 1) * (this.widthArmrest - this.thicknessBackrest) / 1000 * 0.93 + ((this.widthArmrest - this.thicknessBackrest) / 100 - 1) * lengthBackrest / 1000 * 0.93) * ribbon60
  }

  // войлок
  calculate24 (size, theFelt) {
    return size * theFelt
  }

  totalCalculate (hardboard, plywood4, plywood9, plywood15, bar30x40, foamRubber40x65x20, foamRubber20, theCloth, theNut, ratchetMechanism, foamGlue, ribbon60, spandBond, foamRubber35x42x40, foamRubber30x30x40, foamRubberMemory50x14x40, holcon20, theFelt, metallicProfile) {
    const lengthBackrest = this.calcLengthBackrest(this.totalWidth, this.thicknessArmrest, this.numberOfArmrests, this.technologicalGap)
    const ribs = 2
    const sum10For13 = this.calculate10(foamRubber20).setSum + this.calculate11(lengthBackrest, foamRubber40x65x20).setSum + this.calculate12(lengthBackrest, foamRubber30x30x40).setSum +
      this.calculate13(lengthBackrest, foamRubber35x42x40).setSum
    return this.calculate01(plywood4, plywood9) + this.calculate02(bar30x40) +
      this.calculate03(plywood15, lengthBackrest, ribs) + this.calculate04(plywood15, lengthBackrest, ribs) +
      this.calculate05(hardboard) + this.calculate06(hardboard, lengthBackrest) + this.calculate07(plywood9, lengthBackrest) +
      this.calculate08(metallicProfile) + this.calculate09() + this.calculate10(foamRubber20).localPrice +
      this.calculate11(lengthBackrest, foamRubber40x65x20).localPrice + this.calculate12(lengthBackrest, foamRubber30x30x40).localPrice +
      this.calculate13(lengthBackrest, foamRubber35x42x40).localPrice + this.calculate14(lengthBackrest, foamRubber30x30x40) +
      this.calculate15(lengthBackrest, foamRubberMemory50x14x40) + this.calculate16(sum10For13, holcon20) + foamGlue +
      this.calculate17(theCloth) + this.calculate18(lengthBackrest, theCloth) + this.calculate19(lengthBackrest, theCloth) +
      this.calculate20(lengthBackrest, ratchetMechanism) + this.calculate21(lengthBackrest, spandBond) + this.calculate22(theNut) +
      this.calculate23(lengthBackrest, ribbon60) + this.calculate24(this.calculate13(lengthBackrest, foamRubber35x42x40).setSum, theFelt)
  }
}

module.exports = BasicCalculation
