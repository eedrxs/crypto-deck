const ethereumAbi = [
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
]

const contracts = {
  polygonMumbai: {
    gas: 4000000,
    gasPrice: "50000000000",
    address: "0x109460937d8faCd97583A15C5dFA3330839550A2",
    abi: ethereumAbi,
    verifiedContractUrl:
      "https://mumbai.polygonscan.com/address/0x109460937d8faCd97583A15C5dFA3330839550A2#code",
  },
  goerli: {
    gas: 4000000,
    gasPrice: "50000000000",
    address: "0xe18Da8c79076c55499673AfCc36bfA825ee046c8",
    abi: ethereumAbi,
    verifiedContractUrl:
      "https://goerli.etherscan.io/address/0xe18Da8c79076c55499673AfCc36bfA825ee046c8#code",
  },
}

export default contracts
