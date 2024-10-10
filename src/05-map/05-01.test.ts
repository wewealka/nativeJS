import { greetingMasseges, ManType, masseges } from "./05-01";

let  people: Array<ManType> = []

beforeEach (() => {
    people =[
        {name:"Sasha Kalechic", age: 18},
        {name:"Lesha Baldin", age: 19},
        {name:"Leonid Razumovich", age: 69}
    ]
})

test("Greeting masages", () => {
    
    expect(masseges.length).toBe(3)
    expect(masseges[0]).toBe("Hello Sasha. Welcom to LA")
    expect(masseges[1]).toBe("Hello Lesha. Welcom to LA")
    expect(masseges[2]).toBe("Hello Leonid. Welcom to LA")

    const gm = greetingMasseges(people)
    expect(gm.length).toBe(3)
    expect(gm[0]).toBe("Hello Sasha. Welcom to LA")
    expect(gm[1]).toBe("Hello Lesha. Welcom to LA")
    expect(gm[2]).toBe("Hello Leonid. Welcom to LA")
})