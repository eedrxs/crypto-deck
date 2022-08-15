import Web3 from "web3"
import { polygonMumbai } from "../config/contract.json"

const web3 = new Web3(Web3.givenProvider)

const getSigner = async () => {
  await window.ethereum.request({ method: "eth_requestAccounts" })
  return web3.eth.currentProvider
}

const createPolygonToken = async (signer: any, tokenData: any) => {
  const { name, symbol, initialSupply, mintable, burnable, decimals } =
    tokenData
  const { abi, address } = polygonMumbai
  const options = {
    from: signer.selectedAddress,
    gas: 5000000,
    gasPrice: "200000000",
  }
  const erc20Factory = new web3.eth.Contract(abi as any, address, options)
  const newToken = decimals
    ? await erc20Factory?.methods
        .createTokenDecimals(
          name,
          symbol,
          initialSupply,
          mintable,
          burnable,
          decimals
        )
        .send()
    : await erc20Factory?.methods
        .createToken(name, symbol, initialSupply, mintable, burnable)
        .send()
  return newToken
}

const getNetworkLibrary = (network: string) => {
  switch (network) {
    case "Polygon Mumbai":
      return { getSigner: getSigner, factoryContract: createPolygonToken }

    default:
      return { getSigner: getSigner, factoryContract: createPolygonToken }
  }
}

export { getNetworkLibrary }

interface Options {
  from: string
  gasPrice: string
  gas: number
}
