class ClassWorksBoth {
  constructor (spending, length, width, options) {
    this.spending = spending
    this.length = length
    this.width = width
    this.options = options
  }

  totalLength () {
    return Number(this.length) + Number(this.width)
  }

  // Каркасник
  calcWireframe () {
    if (this.totalLength() < this.spending[0].wireframe.threshold) {
      return this.spending[0].wireframe.first
    } else {
      return this.spending[0].wireframe.second
    }
  }

  // Сварщик
  calcWelder () {
    let resultWelder = 0
    if (this.options.find(item => item === 'metal_in_armrest')) {
      resultWelder = resultWelder + 3000
    }
    if (this.options.find(item => item === 'metal_in_base')) {
      resultWelder = resultWelder + 3000
    }
    if (this.options.find(item => item === 'metal_in_back')) {
      resultWelder = resultWelder + 3000
    }
    return resultWelder
  }

  // Обивщик
  calcUpholsterer () {
    if (this.totalLength() < this.spending[1].upholsterer.threshold) {
      return this.spending[1].upholsterer.first
    } else {
      return this.spending[1].upholsterer.second
    }
  }

  // Швея
  calcSeamstress () {
    if (this.totalLength() < this.spending[4].seamstress.threshold) {
      return this.spending[4].seamstress.first
    } else {
      return this.spending[4].seamstress.second
    }
  }

  // Аренда
  calcRent () {
    if (this.totalLength() < this.spending[5].rent.threshold) {
      return this.spending[5].rent.first
    } else {
      return this.spending[5].rent.second
    }
  }

  // Упаковка
  calcPackaging () {
    if (this.totalLength() < this.spending[6].packaging.threshold) {
      return this.spending[6].packaging.first
    } else {
      return this.spending[6].packaging.second
    }
  }

  // Доставка

  // Сварка

  calcAllSpending () {
    return +this.calcWireframe() + +this.calcUpholsterer() +
      +this.calcSeamstress() + +this.calcRent() + +this.calcPackaging() +
      +this.calcWelder()
  }
}
module.exports = ClassWorksBoth
