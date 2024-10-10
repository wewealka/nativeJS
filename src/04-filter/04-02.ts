import { CityType, GovermentBuildingstype } from "../02-objects/02-02";

export function demolishHousesOnTheStreet(city:CityType, street:string ) {
    return city.houses = city.houses.filter(eachHouse => eachHouse.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings:Array<GovermentBuildingstype>, staff: number) => {
    return buildings.filter(gvb => gvb.staffCount > staff)
}