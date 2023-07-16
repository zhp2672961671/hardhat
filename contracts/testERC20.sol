pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
//初始化工具
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
//拥有者工具
import "@openzeppelin/contracts/access/Ownable.sol";
//安全计数
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract testERC20 is Initializable, Ownable, ERC20 {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;
    //能否mint
    mapping(address => bool) public executor;

    constructor(
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {}

    function setExector(
        address _address,
        bool _type
    ) external onlyOwner returns (bool) {
        executor[_address] = _type;
        return true;
    }

    modifier onlyExecutor() {
        require(executor[msg.sender], "executor: caller is not the executor");
        _;
    }

    function mint(
        address account_,
        uint256 amount_
    ) external onlyExecutor returns (bool) {
        _mint(account_, amount_);
        return true;
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    function burnToAdmin(
        address account_,
        uint256 amount_
    ) external onlyExecutor returns (bool) {
        _burn(account_, amount_);
        return true;
    }

    function burnFrom(address account_, uint256 amount_) public {
        uint256 decreasedAllowance_ = allowance(account_, msg.sender).sub(
            amount_,
            "ERc20: burn amount exceeds allownce"
        );
        _approve(account_, msg.sender, decreasedAllowance_);
        _burn(account_, amount_);
    }
}
