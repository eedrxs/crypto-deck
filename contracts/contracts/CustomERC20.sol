// SPDX-License-Identifier: None
pragma solidity >=0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CustomERC20 is ERC20Burnable, Ownable {
    bool private _isMintable;
    bool private _isBurnable;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_,
        bool isMintable_,
        bool isBurnable_
    ) ERC20(name_, symbol_) {
        _isMintable = isMintable_;
        _isBurnable = isBurnable_;

        ERC20._mint(tx.origin, initialSupply_ * 10**decimals());
        transferOwnership(tx.origin);
    }

    function mint(address account, uint256 amount) public onlyOwner {
        require(isMintable(), "Token is not mintable");
        ERC20._mint(account, amount);
    }

    function burn(uint256 amount) public override {
        require(isBurnable(), "Token cannot be burned");
        ERC20._burn(_msgSender(), amount);
    }

    function isMintable() public view returns (bool) {
        return _isMintable;
    }

    function isBurnable() public view returns (bool) {
        return _isBurnable;
    }
}
