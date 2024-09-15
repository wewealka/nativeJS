import { manType } from "../02/02";
import { CityType, GovermentBuildingstype, Housestype } from "../02/02-02";

const sum = (a:number, b:number) => {
    return a + b;
}
export function sum2(a:number, b:number) {
    return a + b;
}

export const addingSkill = (man:manType, skill: string) => {
    man.technologies.push({
        id:new Date().getTime(),
        title: skill
    })
}
export function addingSkill1 (man:manType, skill: string) {
    man.technologies.push({
        id:new Date().getTime(),
        title: skill
    })
}

export function madeManActive(man:manType) {
    man.isActive = true
}

export const DoesManLiveInMinsk = (man:manType, cityName: string)=> {
    return man.address.city.title === cityName;
}

export const addMoneyToBudget = (govermentBuildings:GovermentBuildingstype, budget:number) => {
    govermentBuildings.budget += budget;
}

export const repairHouses = (house:Housestype) => {
    house.repaired = true;
}
export const toHireAndFireStaff = (govermentBuildings:GovermentBuildingstype,staffCount:number) => {
    govermentBuildings.staffCount += staffCount
}


export function greetingMessage(city:CityType) {
    // return "Hello " + city.title + " citezens." +" I want you be happy." + " ALL " + city.citizensNumber + " men " //that one below more innovational
    return `Hello ${city.title} citezens. I want you be happy. ALL ${ city.citizensNumber} men `
}