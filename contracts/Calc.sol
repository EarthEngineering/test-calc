pragma solidity >=0.5.11 <0.7.0;
import "../installed_contracts/calculator/contracts/Calculator.sol";

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
