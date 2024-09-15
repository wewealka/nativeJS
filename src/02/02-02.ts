export type CityType = {
    title: string
    houses: Array<Housestype>
    govermentBuildings: Array<GovermentBuildingstype>
    citizensNumber: number
}

///housesTypes**************************************************************
export type Housestype = {
    buildedAt: number
    repaired: boolean
    address: HousesaddressType
}


export type HousesaddressType = {
    number: number
    street: streetType
}


export type streetType = {
    title: string
}
///housesTypes**************************************************************
///govermentBuildingsTypes**************************************************************

export type GovermentBuildingstype = {
    type: string
    budget: number
    staffCount: number
    address: govermentaddressType
}

export type govermentaddressType = {
    street: govermentstreetType
}

export type govermentstreetType = {
    title: string
}
///govermentBuildingsTypes**************************************************************
