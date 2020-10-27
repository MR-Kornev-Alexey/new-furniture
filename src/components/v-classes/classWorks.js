class ClassWorks {
  constructor (spending, length) {
    this.spending = spending
    this.length = length
  }

  // Каркасник
  calcWireframe () {
    if (this.length < this.spending.wireframe.threshold) {
      return this.spending.wireframe.first
    } else {
      return this.spending.wireframe.second
    }
  }

  // Обивщик
  calcUpholsterer () {
    if (this.length < this.spending.upholsterer.threshold) {
      return this.spending.upholsterer.first
    } else {
      return this.spending.upholsterer.second
    }
  }

  // Столяр
  // Сварщик

  // Швея
  calcSeamstress () {
    if (this.length < this.spending.seamstress.threshold) {
      return this.spending.seamstress.first
    } else {
      return this.spending.seamstress.second
    }
  }

  // Аренда
  calcRent () {
    if (this.length < this.spending.rent.threshold) {
      return this.spending.rent.first
    } else {
      return this.spending.rent.second
    }
  }

  // Упаковка
  calcPackaging () {
    if (this.length < this.spending.packaging.threshold) {
      return this.spending.packaging.first
    } else {
      return this.spending.packaging.second
    }
  }

  // Доставка

  calcDelivery () {
    if (this.length < this.spending.delivery.threshold) {
      return this.spending.delivery.first
    } else {
      return this.spending.delivery.second
    }
  }
  // Сварка

  calcAllSpending () {
    return +this.calcWireframe() + +this.calcUpholsterer() +
      +this.calcSeamstress() + +this.calcRent() + +this.calcPackaging() + +this.calcDelivery()
  }
}
module.exports = ClassWorks
