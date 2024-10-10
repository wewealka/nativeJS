import { CityType } from "../02-objects/02-02";
import { addMoneyToBudget, greetingMessage, repairHouses, toHireAndFireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
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

test("Budget should be changed for Hospital", ()=> {
    addMoneyToBudget(city.govermentBuildings[0], 100000);
    expect(city.govermentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for Fire-station", ()=> {
    addMoneyToBudget(city.govermentBuildings[1], -100000);
    expect(city.govermentBuildings[1].budget).toBe(400000)
})

test("House should be repaered", () => {
    repairHouses(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy()
})
test ("staff should be incressed", () => {
    toHireAndFireStaff(city.govermentBuildings[0], 20)
    expect(city.govermentBuildings[0].staffCount).toBe(220)
})

test ("staff should be decressed", () => {
    toHireAndFireStaff(city.govermentBuildings[0], -20)
    expect(city.govermentBuildings[0].staffCount).toBe(180)
    toHireAndFireStaff(city.govermentBuildings[1], -500)
    expect(city.govermentBuildings[1].staffCount).toBe(500)
})

test ("Greeting message should be corrected for city", () => {
    // 1
    // const message = greetingMessage(city)
    // expect(message).toBe("Hello New York citezens. I want you be happy. ALL 100000 men ")
    // 
    // 2
    expect(greetingMessage(city)).toBe("Hello New York citezens. I want you be happy. ALL 100000 men ")
    // 2
})