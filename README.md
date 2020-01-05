# Test Calc

Testing importing the Calculator smart contract via ethpm, compiling and calling it.

Install a smart contract as a dependency with truffle

```
truffle install calculator
```

Note it creates an `installed_contracts` directory.

`import` the contract in to your [local smart contract](contracts/Calc.sol#L2)

```
import "../installed_contracts/calculator/contracts/Calculator.sol";
```
