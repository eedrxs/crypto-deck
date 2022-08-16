export interface UserDetails {
  uid: string
  name: string
  email: string
  createdAt: any
}

export interface UserCredential {
  user: User
  providerId: null | string
  _tokenResponse: TokenResponse
  operationType: string
}

export interface TokenResponse {
  kind: string
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
  federatedId?: string
  providerId?: string
  emailVerified?: boolean
  photoUrl?: string
  fullName?: string
  displayName?: string
  context?: string
  oauthAccessToken?: string
  rawUserInfo?: string
  isNewUser?: boolean
  firstName?: string
  lastName?: string
  oauthExpireIn?: number
  oauthIdToken?: string
  screenName?: string
}

// interface ProviderTokenResponse extends TokenResponse {
//   federatedId: string
//   providerId: string
//   emailVerified: boolean
//   photoUrl: string
//   fullName: string
//   displayName: string
//   context: string
//   oauthAccessToken: string
//   rawUserInfo: string
//   isNewUser: boolean
// }

// export interface GoogleTokenResponse extends ProviderTokenResponse {
//   firstName: string
//   lastName: string
//   oauthExpireIn: number
//   oauthIdToken: string
// }

// export interface GithubTokenResponse extends ProviderTokenResponse {
//   screenName: string
// }

interface User {
  uid: string
  email: string
  emailVerified: boolean
  isAnonymous: boolean
  providerData: ProviderDatum[]
  stsTokenManager: StsTokenManager
  createdAt: string
  lastLoginAt: string
  apiKey: string
  appName: string
  photoUrl?: string
}

// interface ProviderUser extends User {
//   photoUrl: string
// }

interface ProviderDatum {
  providerId: string
  uid: string
  displayName: null
  email: string
  phoneNumber: null
  photoURL: null
}

interface StsTokenManager {
  refreshToken: string
  accessToken: string
  expirationTime: number
}
