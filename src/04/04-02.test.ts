import { CityType } from "../02/02-02";
import { demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen } from "./04-02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "Happy street"
                }
            }
        },
        {   
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        },

        {   
            id: 3,
            buildedAt: 2005,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: "Happy street"
                }
            }
        },
        ],
        govermentBuildings: [
            {
                type: "Hospital",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central street"
                    }
                }
            },
            {
                type: "Fire-station",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South street"
                    }
                }
            },
        ],
        citizensNumber: 100000,
    }
})

test ("Houses should be destroyd", ()=> {
    demolishHousesOnTheStreet(city, "Happy street")
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(2)
})

test("buildings with correct staff count", ()=> {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.govermentBuildings, 500)
    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("Fire-station")
})