// SPDX-License-Identifier: None
pragma solidity >=0.8.9;

import "./CustomERC20.sol";
import "./CustomERC20Decimals.sol";

contract ERC20Factory {
    event TokenCreated(
        address indexed contractAddress,
        address indexed creatorAddress
    );

    function createToken(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_,
        bool isMintable_,
        bool isBurnable_
    ) public returns (address, address) {
        address newToken = address(
            new CustomERC20(
                name_,
                symbol_,
                initialSupply_,
                isMintable_,
                isBurnable_
            )
        );

        emit TokenCreated(address(newToken), msg.sender);
        return (address(newToken), msg.sender);
    }

    function createTokenDecimals(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_,
        bool isMintable_,
        bool isBurnable_,
        uint8 decimals_
    ) public returns (address, address) {
        address newToken = address(
            new CustomERC20Decimals(
                name_,
                symbol_,
                initialSupply_,
                isMintable_,
                isBurnable_,
                decimals_
            )
        );

        emit TokenCreated(address(newToken), msg.sender);
        return (address(newToken), msg.sender);
    }
}
