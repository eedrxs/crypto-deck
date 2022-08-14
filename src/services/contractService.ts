import { use } from "@maticnetwork/maticjs"
import { Web3ClientPlugin } from "@maticnetwork/maticjs-ethers"
import { providers, Contract } from "ethers"

use(Web3ClientPlugin)

const provider = new providers.JsonRpcProvider(
  import.meta.env.ALCHEMY_PROVIDER_URL,
  "maticmum"
)

const getProvider = () => {
  return provider
}

const getSigner = async () => {
  await provider.send("eth_requestAccounts", [])
  return provider.getSigner()
}

const getContract = (address: string, abi: string[], provider: any) => {
  return new Contract(address, abi, provider)
}

export { getSigner, getContract }
