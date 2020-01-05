# Test Calc

Testing importing the Calculator smart contract via ethpm, compiling and calling it.

Install a smart contract as a dependency with truffle

```
truffle install calculator
```

Note it creates an `installed_contracts` directory.

`import` the contract in to your [local smart contract](contracts/Calc.sol#L2)

```solidity
import "../installed_contracts/calculator/contracts/Calculator.sol";
```

Also note we pass in the Calculator contracts address in to the `constrctor` for use later.

```solidity
contract Calc {
  address calculatorAddress;
  constructor(address _calculatorAddress) public {
      calculatorAddress = _calculatorAddress;
  }

  function add(uint256 augend, uint256 addend) public view returns (uint256 sum) {
    Calculator instanceCalculator = Calculator(calculatorAddress);

    return instanceCalculator.add(augend, addend);
  }
}
```

## Migration

Also in [the migration](migrations/2_deploy_contracts.js) note that we get the deployed calculator and pass it's address in to the other contract's constructor.

```solidity
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
```
