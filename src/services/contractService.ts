import { ethers } from "ethers"

const provider = new ethers.providers.JsonRpcProvider(
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
  return new ethers.Contract(address, abi, provider)
}

export { getSigner, getContract }
