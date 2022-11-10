class Calculator {
  constructor(prevText, curText){
    this.prevText = prevText;
    this.curText = curText;
    this.clear();
  }
  
  clear (){
    this.curOp = ''
    this.prevOp = ''
    this.op = undefined
  }
  delete (){
    this.curOp = this.curOp.toString().slice(0, -1)
  }
  appendNum (num){
    if (num === '.' && this.curOp.includes('.')) return
    this.curOp = this.curOp.toString() + num.toString()
  }
  chooseOp (op){
    if (this.curOp === '') return
    if (this.prevOp !== '') {
      this.compute()
    }
    this.op = op
    this.prevOp = this.curOp
    this.curOp = ''
  }
  compute (){
    let computation
    const prev = parseFloat(this.prevOp)
    const cur = parseFloat(this.curOp)
    if (isNaN(prev) || isNaN(cur)) return
    switch (this.op) {
      case '+': 
        computation = prev + cur
        break
      case '-': 
        computation = prev - cur
        break
      case '÷': 
        computation = prev / cur
        break
      case 'x': 
        computation = prev * cur
        break
      default:
        return
    }
    this.curOp = computation
    this.op = undefined
    this.prevOp = ''
  }
  updateDisplay (){
    this.curText.innerText = this.curOp
    if (this.op != null) {
      this.prevText.innerText = `${this.prevOp} ${this.op}`
    }
    else {
      this.prevText.innerText = ''
    }
  }
}

const numButtons = document.querySelectorAll('[data-num]')
const opButtons = document.querySelectorAll('[data-op]')
const eqButton = document.querySelector('[data-eq]')
const delButton = document.querySelector('[data-del]')
const acButton = document.querySelector('[data-ac]')
const prevText = document.querySelector('[data-prev]')
const curText = document.querySelector('[data-cur]')
const colorButton = document.querySelector('[data-color]')

const calculator = new Calculator(prevText, curText)

// numButtons.addEventListener('click', function() {
//   const randomIndex = colors[Math.floor(Math.random() * colors.length)]
//   document.querySelector("body").style.background = randomIndex;
// })

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNum(button.innerText)
    calculator.updateDisplay()
    const randomIndex = colors[Math.floor(Math.random() * colors.length)]
  document.querySelector("body").style.background = randomIndex;
  })
})

opButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOp(button.innerText)
    calculator.updateDisplay()
  })
})

eqButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

acButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

delButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"]






