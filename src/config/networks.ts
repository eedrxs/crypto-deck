const networks: Networks = {
  "Polygon Mumbai": {
    name: "Polygon Mumbai",
    tokenTypes: ["ERC20"],
    explorer: {
      url: "https://mumbai.polygonscan.com/token/",
      name: "Polygonscan",
    },
    color: "#8247E5",
  },
  Goerli: {
    name: "Goerli",
    tokenTypes: ["ERC20", "ERC777"],
    explorer: {
      url: "https://goerli.etherscan.io/token/",
      name: "Etherscan",
    },
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
    color: string
  }
}
