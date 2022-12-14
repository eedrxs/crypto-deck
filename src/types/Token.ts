export interface Token {
  name: string
  symbol: string
  network: string
  type: string
  initialSupply: number
  decimals: number
  address: string
  mintable: boolean
  burnable: boolean
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
    explorer: {
      url: string
      name: string
    }
    color: string
  }
}

// Generated by https://quicktype.io

export interface TokenResponse {
  blockHash: string
  blockNumber: number
  contractAddress: null
  cumulativeGasUsed: number
  effectiveGasPrice: number
  from: string
  gasUsed: number
  logsBloom: string
  status: boolean
  to: string
  transactionHash: string
  transactionIndex: number
  type: string
  events: { [key: string]: Event }
}

export interface Event {
  address: string
  blockNumber: number
  transactionHash: string
  transactionIndex: number
  blockHash: string
  logIndex: number
  removed: boolean
  id: string
  returnValues: ReturnValues
  signature: null
  raw: Raw
}

export interface Raw {
  data: string
  topics: string[]
}

export interface ReturnValues {}
