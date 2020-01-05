const Calc = artifacts.require("Calc")

contract("Calc", accounts => {
  it("should add 2 numbers", async () => {
    const calculatorInstance = await Calc.deployed()
    const augend = 1
    const addend = 2
    const sum = await calculatorInstance.add(augend, addend)

    assert.equal(sum, 3, "the sum should be 3")
  })
})
