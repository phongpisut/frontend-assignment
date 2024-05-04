
export interface Users {
    users: User[]
    total: number
    skip: number
    limit: number
  }

  export interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: Hair
    domain: string
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
    crypto: Crypto
  }
  
   interface Hair {
    color: string
    type: string
  }
  
   interface Address {
    address: string
    city: string
    coordinates: Coordinates
    postalCode: string
    state: string
  }
  
   interface Coordinates {
    lat: number
    lng: number
  }
  
   interface Bank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  
   interface Company {
    address: Address2
    department: string
    name: string
    title: string
  }
  
   interface Address2 {
    address: string
    city?: string
    coordinates: Coordinates2
    postalCode: string
    state: string
  }
  
   interface Coordinates2 {
    lat: number
    lng: number
  }
  
   interface Crypto {
    coin: string
    wallet: string
    network: string
  }
  