// SPDX-License-Identifier: None
pragma solidity >=0.8.9;

import "./CustomERC20.sol";
import "./CustomERC20Decimals.sol";

contract ERC20Factory {
    function createToken(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_,
        bool isMintable_,
        bool isBurnable_
    )
        public
        returns (
            string memory,
            string memory,
            uint256,
            bool,
            bool
        )
    {
        new CustomERC20(
            name_,
            symbol_,
            initialSupply_,
            isMintable_,
            isBurnable_
        );
        return (name_, symbol_, initialSupply_, isMintable_, isBurnable_);
    }

    function createToken(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_,
        bool isMintable_,
        bool isBurnable_,
        uint8 decimals_
    )
        public
        returns (
            string memory,
            string memory,
            uint256,
            bool,
            bool,
            uint8
        )
    {
        new CustomERC20Decimals(
            name_,
            symbol_,
            initialSupply_,
            isMintable_,
            isBurnable_,
            decimals_
        );
        return (
            name_,
            symbol_,
            initialSupply_,
            isMintable_,
            isBurnable_,
            decimals_
        );
    }
}
