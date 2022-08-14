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
  name: string
  symbol: string
  network: string
  type: string
  initialSupply: number | null
  decimals: number | null
  mintable: boolean
  burnable: boolean
}
