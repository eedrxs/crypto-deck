export interface Token {
  name: string
  symbol: string
  network: string
  type: string
  initialSupply: number
  mintPrice: number
  address: string
}

export interface TokenForm {
  selectedNetwork: string
  tokenType: string
  name: string
  symbol: string
  initialSupply: number | null
  mintable: boolean
  burnable: boolean
  decimals: number | null
}

export interface Networks {
  [network: string]: {
    name: string
    tokenTypes: string[]
  }
}
