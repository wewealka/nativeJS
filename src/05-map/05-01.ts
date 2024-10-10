import { GovermentBuildingstype, Housestype } from "../02-objects/02-02"

export  type ManType = {
    name: string
    age: number
}

export const people: Array<ManType> = [
    {name:"Sasha Kalechic", age: 18},
    {name:"Lesha Baldin", age: 19},
    {name:"Leonid Razumovich", age: 69}
]

export const Transormator = (man:ManType) => ({
    stack: ["css", "html", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    LastName: man.name.split(" ")[1]
})


const d1 = Transormator(people[0])
const d2 = Transormator(people[1])
const d3 = Transormator(people[2])

const devs = [
    // d1, d2, d3
    Transormator(people[0]),
    Transormator(people[1]),
    Transormator(people[2])
]

const devs3 = people.map(Transormator)
const devs4 = people.map(man =>({
    stack: ["css", "html", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    LastName: man.name.split(" ")[1]
}))

export const masseges = people.map( man => `Hello ${man.name.split(" ")[0]}. Welcom to LA`)

export const greetingMasseges = (people: ManType[]) => {
    return  people.map( man => `Hello ${man.name.split(" ")[0]}. Welcom to LA`)
}

export const getStreetsTitlesOfGovermantBuildings = (govermentBuildings: Array<GovermentBuildingstype>) => {
    return govermentBuildings.map(street => street.address.street.title)
}
export const getStreetsTitlesOfHouses = (houses: Array<Housestype>) => {
    return houses.map(street => street.address.street.title)
}

export const createMasseges = (houses: Array<Housestype>) => {
    return houses.map(houses =>`Hello ${houses.address.street.title}. What is ur choise`)
}