const networks: Networks = {
  "Polygon Mumbai": {
    name: "Polygon Mumbai",
    tokenTypes: ["ERC20"],
    explorer: {
      url: "https://mumbai.polygonscan.com/token/",
      name: "Polygonscan",
    },
  },
  Ethereum: {
    name: "Ethereum Goerli",
    tokenTypes: ["ERC20", "ERC777"],
    explorer: {
      url: "https://goerli.etherscan.io/tokens",
      name: "Etherscan",
    },
  },
}

export default networks

interface Networks {
  [network: string]: {
    name: string
    tokenTypes: string[]
    explorer: {
      url: string
      name: string
    }
  }
}
