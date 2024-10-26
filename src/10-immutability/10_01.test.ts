import { addNewBooksToUser, delBooksToUser, delCompanyToUser, makeHairStyle, moveUser, moveUserToOtherHouse, newCompanyToUser, upCompanyToUser2, updateBooksToUser, updateCompanyToUser, upgradeUserComp, upgradeUserLaptop, user, user2, user3, user4 } from "./10_01";

test("reference type test", () => {

    const awesomeUser = makeHairStyle(user2, 2);
    expect(user2.hair).toBe(18);
    expect(awesomeUser.hair).toBe(9);
    expect(awesomeUser.address).toBe(user2.address);
})



test("change address", () => {

    const movedUser = moveUser(user2, 'Kiev');
    expect(user2).not.toBe(movedUser);
    expect(movedUser.address.city).toBe('Kiev');
    expect(user2.address.city).toBe('Minsk');
    expect(user2.address).not.toBe(movedUser.address);
    expect(user2.laptop).toBe(movedUser.laptop)

})
test("laptop change", () => {

    const happyUser = upgradeUserLaptop(user,"macBook");
    expect(happyUser.laptop.manufacturer.company).toBe("macBook")
    expect(user.laptop.manufacturer.company).toBe("aser")
    expect(happyUser.laptop).not.toBe(user.laptop)
    expect(happyUser.address).toBe(user.address)
    expect(happyUser.computer).toBe(user.computer)
   })
test("comp change", () => {

    const happyUser = upgradeUserComp(user,"I9", 4090);
    expect(happyUser).not.toBe(user)
    expect(happyUser.computer.CPU).toBe("I9")
    expect(happyUser.computer.graphicsCard).toBe(4090)
    expect(happyUser.computer).not.toBe(user.computer)
    expect(happyUser.address).toBe(user.address)
    expect(happyUser.laptop).toBe(user.laptop)
   })


test("house change", () => {
    const happyUser = moveUserToOtherHouse(user3, 90);
    expect(happyUser).not.toBe(user3)
    expect(happyUser.address).not.toBe(user3.address)
    expect(happyUser.address.house).toBe(90)
    expect(user3.address.house).toBe(5)
    expect(happyUser.books).toBe(user3.books)
   })

test("add new books to user", () => {
    const happyUser = addNewBooksToUser(user3, ["90", "7", "ts", "chad"]);
    expect(happyUser).not.toBe(user3)
    expect(happyUser.books[4]).toBe("90")
    expect(happyUser.books).not.toBe(user3.books)
    expect(happyUser.address.house).toBe(user3.address.house)
    expect(user3.laptop).toBe(happyUser.laptop)
    expect(happyUser.computer).toBe(user3.computer)
   })

test("update books to user", () => {
    const happyUser = updateBooksToUser(user3, "js", "ts");
    expect(happyUser).not.toBe(user3)
    expect(happyUser.books[2]).toBe("ts")
    expect(happyUser.books).not.toBe(user3.books)
    expect(happyUser.address.house).toBe(user3.address.house)
    expect(user3.laptop).toBe(happyUser.laptop)
    expect(happyUser.computer).toBe(user3.computer)
   })

test("del book to user", () => {
    const happyUser = delBooksToUser(user3, "js");
    expect(happyUser).not.toBe(user3)
    expect(happyUser.books[2]).toBe("react")
    expect(happyUser.books).not.toBe(user3.books)
    expect(happyUser.address.house).toBe(user3.address.house)
    expect(user3.laptop).toBe(happyUser.laptop)
    expect(happyUser.computer).toBe(user3.computer)
   })

test("new company to user", () => {
    const happyUser = newCompanyToUser(user4, [{id: 3, title: "Epam"}]);
    expect(happyUser).not.toBe(user4)
    expect(happyUser.companies[2].title).toBe("Epam")
    expect(happyUser.companies).not.toBe(user4.companies)
    expect(happyUser.address.house).toBe(user4.address.house)
    expect(user4.laptop).toBe(happyUser.laptop)
    expect(happyUser.computer).toBe(user4.computer)
   })

   test("update company to user", () => {
    const happyUser = updateCompanyToUser(user4, 1, "SoftClub");
    expect(happyUser).not.toBe(user4)
    expect(happyUser.companies[0].title).toBe("SoftClub")
    expect(happyUser.companies).not.toBe(user4.companies)
    expect(happyUser.address.house).toBe(user4.address.house)
    expect(user4.laptop).toBe(happyUser.laptop)
    expect(happyUser.computer).toBe(user4.computer)
   })


   test("del company to user", () => {
    const happyUser = delCompanyToUser(user4, 1);
    expect(happyUser).not.toBe(user4)
    expect(happyUser.companies.length).toBe(1)
    expect(happyUser.companies).not.toBe(user4.companies)
    expect(happyUser.address.house).toBe(user4.address.house)
    expect(user4.laptop).toBe(happyUser.laptop)
    expect(happyUser.computer).toBe(user4.computer)
   })


let companies = {
    "vova": [{id: 1, title: "SoftClub"}, {id: 2, title: "Google"}],
    "Sasha": [{id: 1, title: "SoftClub"}, {id: 2, title: "MicroSoft"}],
}

test("up2 company to user", () => {
    const copy = upCompanyToUser2(companies, "vova", 1, "ystal")
    expect(copy["vova"]).not.toBe(companies["vova"])
    expect(copy["Sasha"]).toBe(companies["Sasha"])
    expect(copy["vova"][0].title).toBe("ystal")
   })