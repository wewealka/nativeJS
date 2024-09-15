import { title } from "process"

type manType = {
    id:number
    age:number
    name:string
    isActive:boolean
    address:AddressType
    technologies:Array<TechnologiesType>
}
type AddressType = {
    streetTitle:string
    city:LocalCityType
}
export type LocalCityType = {
    title: string
    countryTitle: string
}
type TechnologiesType = {
    id:number
    title:string
}

const man:manType = {
    id: 1,
    name: "vova",
    age: 12,
    isActive: true,
    address: {
        streetTitle: "Rokossovskogo 5/1",
        city: {
            title: "Minsk",
            countryTitle: "RB"
        }
        
    },
    technologies: [
        {
            id:1,
            title:"HTML"
        },
        {
            id:2,
            title:"CSS"
        },
        {
            id:3,
            title: "TS/JS"
        },
    ]
}
