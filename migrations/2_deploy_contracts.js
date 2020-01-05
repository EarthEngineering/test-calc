const Calculator = artifacts.require("Calculator")
const Calc = artifacts.require("Calc")

module.exports = deployer => {
  deployer
    .deploy(Calculator)
    .then(() => {
      return deployer.deploy(Calc, Calculator.address)
    })
    .then(() => {})
}
