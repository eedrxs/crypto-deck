export default {
  verification:
    "https://mumbai.polygonscan.com/address/0xA785C0F8F3F0ff1CBf96F31f5844C8B5b1E945C0#code",
  oldAddress: "0x3b63E72Af34599437f07E523D7a46e7a7F62b13A",
  oldAbi: [
    "function createToken(string memory name_, string memory symbol_, uint256 initialSupply_, bool isMintable_, bool isBurnable_) public returns (string memory, string memory, uint256, bool, bool)",
    "function createTokenDecimals(string memory name_, string memory symbol_, uint256 initialSupply_, bool isMintable_, bool isBurnable_, uint8 decimals_) public returns (string memory, string memory, uint256, bool, bool, uint8)",
  ],
  polygonMumbai: {
    formerAddress: "0xC1778ddb6a66c76B6E3e1f82990CF0F3Fd440276",
    gas: 4000000,
    gasPrice: "50000000000",
    address: "0xA785C0F8F3F0ff1CBf96F31f5844C8B5b1E945C0",
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "creatorAddress",
            type: "address",
          },
        ],
        name: "TokenCreated",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "name_",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol_",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "initialSupply_",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMintable_",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isBurnable_",
            type: "bool",
          },
        ],
        name: "createToken",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "name_",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol_",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "initialSupply_",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMintable_",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isBurnable_",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "decimals_",
            type: "uint8",
          },
        ],
        name: "createTokenDecimals",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  },
}
