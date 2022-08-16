import Web3 from "web3"
import { polygonMumbai } from "../config/contract.json"
import { writeToDb } from "./dbService"
import { auth } from "../../firebase"

const web3 = new Web3(Web3.givenProvider)

const getEthereumSigner = async () => {
  await window.ethereum.request({ method: "eth_requestAccounts" })
  return web3.eth.currentProvider
}

const createPolygonToken = async (signer: any, tokenData: any) => {
  const DEFAULT_DECIMALS = 18
  const {
    name,
    symbol,
    initialSupply,
    mintable,
    burnable,
    decimals,
    tokenType: type,
  } = tokenData
  const { abi, address, gas, gasPrice } = polygonMumbai
  const options = {
    from: signer.selectedAddress,
    gas,
    gasPrice,
  }
  const erc20Factory = new web3.eth.Contract(abi as any, address, options)
  const filter = { creatorAddress: signer.selectedAddress }
  erc20Factory.events.TokenCreated(filter, (error, event) => {})

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

  writeToDb("users", auth.currentUser as any as string, "tokens", {
    name,
    symbol,
    network: "Polygon Mumbai",
    type,
    initialSupply,
    decimals: decimals || DEFAULT_DECIMALS,
  })

  return newToken
}

const getNetworkLibrary = (network: string) => {
  switch (network) {
    case "Polygon Mumbai":
      return {
        getSigner: getEthereumSigner,
        factoryContract: createPolygonToken,
      }

    default:
      return {
        getSigner: getEthereumSigner,
        factoryContract: createPolygonToken,
      }
  }
}

export { getNetworkLibrary }

interface Options {
  from: string
  gasPrice: string
  gas: number
}
