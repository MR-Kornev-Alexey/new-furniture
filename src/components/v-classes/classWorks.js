class ClassWorks {
  constructor (spending, length, options) {
    this.spending = spending
    this.length = length
    this.options = options
  }

  // Каркасник
  calcWireframe () {
    if (this.length < this.spending[0].wireframe.threshold) {
      return this.spending[0].wireframe.first
    } else {
      return this.spending[0].wireframe.second
    }
  }

  // Сварщик
  calcWelder () {
    let resultWelder = 0
    if (this.options.find(item => item === 'metal_in_armrest')) {
      resultWelder = resultWelder + 1500
    }
    if (this.options.find(item => item === 'metal_in_base')) {
      resultWelder = resultWelder + 1500
    }
    if (this.options.find(item => item === 'metal_in_back')) {
      resultWelder = resultWelder + 1500
    }
    return resultWelder
  }

  // Обивщик
  calcUpholsterer () {
    if (this.length < this.spending[1].upholsterer.threshold) {
      return this.spending[1].upholsterer.first
    } else {
      return this.spending[1].upholsterer.second
    }
  }

  // Швея
  calcSeamstress () {
    if (this.length < this.spending[4].seamstress.threshold) {
      return this.spending[4].seamstress.first
    } else {
      return this.spending[4].seamstress.second
    }
  }

  // Аренда
  calcRent () {
    if (this.length < this.spending[5].rent.threshold) {
      return this.spending[5].rent.first
    } else {
      return this.spending[5].rent.second
    }
  }

  // Упаковка
  calcPackaging () {
    if (this.length < this.spending[6].packaging.threshold) {
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
module.exports = ClassWorks
