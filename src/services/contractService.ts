import Web3 from "web3"
import contracts from "../config/contract"
import networks from "../config/networks"
import { auth } from "../../firebase"
import { writeDocToDb } from "./dbService"
import { serverTimestamp } from "@firebase/firestore"
import { TokenForm } from "../types/Token"

const web3 = new Web3(Web3.givenProvider)

const getEthereumSigner = async () => {
  if (!window.ethereum) {
    throw new Error("Metamask not available on this browser")
  }
  await window.ethereum.request({ method: "eth_requestAccounts" })
  return web3.eth.currentProvider
}

const createToken = async (signer: any, tokenData: TokenForm) => {
  const {
    name,
    symbol,
    initialSupply,
    mintable,
    burnable,
    decimals,
    selectedNetwork,
  } = tokenData
  const { abi, address, gas, gasPrice } =
    contracts[selectedNetwork as keyof typeof contracts]
  const options = {
    from: signer.selectedAddress,
    gas,
    gasPrice,
  }

  const currentNetwork = Object.values(networks).find(
    (network) => network.chainId === window.ethereum.chainId
  )
  if (selectedNetwork !== currentNetwork?.name) {
    throw new Error("Network mismatch")
  }

  const erc20Factory = new web3.eth.Contract(abi as any, address, options)
  const contractCall = decimals
    ? erc20Factory?.methods.createTokenDecimals(
        name,
        symbol,
        initialSupply,
        mintable,
        burnable,
        decimals
      )
    : erc20Factory?.methods.createToken(
        name,
        symbol,
        initialSupply,
        mintable,
        burnable
      )

  await contractCall
    .send()
    .then((receipt: any) => addTokenToDb(tokenData, receipt))
    .catch((error: any) => {
      throw new Error(error.message)
    })

  return contractCall
}

async function addTokenToDb(tokenData: TokenForm, receipt: any) {
  const DEFAULT_DECIMALS = 18
  const {
    name,
    symbol,
    tokenType,
    initialSupply,
    mintable,
    burnable,
    decimals,
    selectedNetwork,
  } = tokenData

  const { contractAddress } = receipt.events.TokenCreated.returnValues

  await writeDocToDb(
    "users",
    auth.currentUser?.uid as any as string,
    "tokens",
    {
      name,
      symbol,
      network: selectedNetwork,
      type: tokenType,
      initialSupply,
      decimals: decimals || DEFAULT_DECIMALS,
      address: contractAddress,
      mintable,
      burnable,
      createdAt: serverTimestamp(),
    }
  )
}

const getNetworkLibrary = (network: string) => {
  switch (network) {
    case "Polygon Mumbai":
      return {
        getSigner: getEthereumSigner,
        factoryContract: createToken,
      }

    default:
      return {
        getSigner: getEthereumSigner,
        factoryContract: createToken,
      }
  }
}

export { getNetworkLibrary }

interface Options {
  from: string
  gasPrice: string
  gas: number
}
