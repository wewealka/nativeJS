import { CityType } from "../02-objects/02-02";
import { createMasseges, getStreetsTitlesOfGovermantBuildings, getStreetsTitlesOfHouses } from "./05-01";

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

test("list of streets titles of gvb", () => {
    let streets = getStreetsTitlesOfGovermantBuildings(city.govermentBuildings)
    expect(streets.length).toBe(2)
    expect(streets[0]).toBe("Central street")
    expect(streets[1]).toBe("South street")
})

test("list of streets titles of defh", () => {
    let streets = getStreetsTitlesOfHouses(city.houses)
    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("Happy street")
    expect(streets[1]).toBe("White street")
    expect(streets[2]).toBe("Happy street")
})

test("create greeting masseges for streets", () => {
    let masages = createMasseges(city.houses)
    expect(masages.length).toBe(3)
    expect(masages[0]).toBe("Hello Happy street. What is ur choise")
    expect(masages[1]).toBe("Hello White street. What is ur choise")
    expect(masages[2]).toBe("Hello Happy street. What is ur choise")
})