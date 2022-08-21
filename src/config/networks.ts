const networks: Networks = {
  "Polygon Mumbai": {
    name: "Polygon Mumbai",
    tokenTypes: ["ERC20"],
    explorer: {
      url: "https://mumbai.polygonscan.com/token/",
      name: "Polygonscan",
    },
    chainId: "0x13881",
    color: "#8247E5",
  },
  Goerli: {
    name: "Goerli",
    tokenTypes: ["ERC20"],
    explorer: {
      url: "https://goerli.etherscan.io/token/",
      name: "Etherscan",
    },
    chainId: "0x5",
    color: "#9797D7",
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
    chainId: string
    color: string
  }
}
