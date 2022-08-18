// SPDX-License-Identifier: None
pragma solidity >=0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CustomERC20Decimals is ERC20Burnable, Ownable {
    uint8 private _decimals;
    bool private _isMintable;
    bool private _isBurnable;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_,
        bool isMintable_,
        bool isBurnable_,
        uint8 decimals_
    ) ERC20(name_, symbol_) {
        require(_decimals > 0, "Decimals cannot be zero");
        _isMintable = isMintable_;
        _isBurnable = isBurnable_;
        _decimals = decimals_;

        ERC20._mint(tx.origin, initialSupply_ * 10**decimals());
        transferOwnership(tx.origin);
    }

    function mint(address account, uint256 amount) public onlyOwner {
        require(_isMintable, "Token is not mintable");
        ERC20._mint(account, amount);
    }

    function burn(uint256 amount) public override {
        require(_isBurnable, "Token cannot be burned");
        ERC20._burn(_msgSender(), amount);
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}
