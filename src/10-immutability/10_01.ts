export type AddressType = {
    city: string
    house: number
}
export type companyT = {
    id: number
    title:string
}
export type WithCompaniesType = {
    companies: Array <companyT>
}
export type manufacturerType = {
    company: "asus" | "macBook" | "aser" | "zenBook"
}

export type computerType = {
    CPU: "i9" | "i7" | "i5" 
    graphicsCard: 4090 | 4060 | 3090 | 3070  
}

export type userType = {
    name: string
    hair: number
    address: AddressType
}

export type LaptopType = {
    manufacturer: manufacturerType
}

export type UserWithIron = userType & {
    laptop: LaptopType
    computer : computerType
}

export const user2: UserWithIron = {
    name: "Sasha",
    hair: 18,
    address: {
        city: "Minsk",
        house: 89
    },
    laptop: {
        manufacturer: {
            company : "aser"
        }
    },
    computer: {
        CPU: "i9",
        graphicsCard: 4090
    }
}
export const user: UserWithIron = {
    name: "Vova",
    hair: 19,
    address: {
        city: "Minsk",
        house: 5
    },
    laptop: {
        manufacturer: {
            company : "aser"
        }
    },
    computer: {
        CPU: "i7",
        graphicsCard: 4090
    }
}

export function makeHairStyle(u: userType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
}


export function moveUser(u: UserWithIron, newCity: string) {
    return {
        ...u,
        address: { ...u.address, city: newCity }
    }
}


export function upgradeUserLaptop(u:UserWithIron, newCompany: string ) {
    return {
        ...u,
        laptop: {...u.laptop, manufacturer:{ company: newCompany}}
    }
}


export function upgradeUserComp(u:UserWithIron, newCPU: string, newgraphicsCard: number) {
    return {
        ...u,
        computer: {...u.computer, CPU:newCPU, graphicsCard:newgraphicsCard}
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type UserWithBooks = userType & {
    books: Array<string>
}


export const user3: UserWithIron & UserWithBooks = {
    name: "Vova",
    hair: 19,
    address: {
        city: "Minsk",
        house: 5
    },
    laptop: {
        manufacturer: {
            company : "aser"
        }
    },
    computer: {
        CPU: "i7",
        graphicsCard: 4090
    },
    books: ["html", "css", "js", "react"]
}

export function moveUserToOtherHouse(u: UserWithIron & UserWithBooks, newHouse: number) {
    return {
        ...u,
        address: { ...u.address, house: newHouse }
    }
}
export function addNewBooksToUser(u: UserWithIron & UserWithBooks, newBooks: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...newBooks ]
    }
}

// export const updateBooksToUser = (u: UserWithIron & UserWithBooks, oldbook:string, newBook:string) => ({ ...u, books: u.books.map(b => b === oldbook ? newBook : b)})
export function updateBooksToUser(u: UserWithIron & UserWithBooks, oldbook:string, newBook:string) {
    return {
        ...u,
        books: u.books.map(b => b === oldbook ? newBook : b)
    }
}
export function delBooksToUser(u: UserWithIron & UserWithBooks, bookToDel:string) {
    return {
        ...u,
        books: u.books.filter(b => b !== bookToDel)
    }
}
// export const delBooksToUser = (u: UserWithIron & UserWithBooks, bookToDel:string) => ({...u, books: u.books.filter(b => b !== bookToDel)})

export const user4: UserWithIron & WithCompaniesType = {
    name: "Vova",
    hair: 19,
    address: {
        city: "Minsk",
        house: 5
    },
    laptop: {
        manufacturer: {
            company : "aser"
        }
    },
    computer: {
        CPU: "i7",
        graphicsCard: 4090
    },
    companies: [{id: 1, title: "SoClub"}, {id: 2, title: "Google"},]
}


export function newCompanyToUser(u: UserWithIron & WithCompaniesType, newComp:Array<{id:number, title: string}>) {
    return {
        ...u,
        companies:[ ...u.companies, ...newComp]
    }
}


export function updateCompanyToUser(u: UserWithIron & WithCompaniesType, newCompId:number, newComptitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === newCompId ? {...c, title:newComptitle} : c )
    }
}

export function delCompanyToUser(u: UserWithIron & WithCompaniesType, delCompId: number) {
    return {
        ...u,
        companies: u.companies.filter(b => b.id !==  delCompId)
    }
}
export const upCompanyToUser2 = (
    companies: {[key: string]: Array<companyT>},
    userName: string,
    cId: number,
    nTitle: string
) => {
    let copyCompan = {...companies}
    copyCompan[userName] = copyCompan[userName].map(c => c.id === cId ? {...c, title: nTitle} : c )

    return copyCompan
}


