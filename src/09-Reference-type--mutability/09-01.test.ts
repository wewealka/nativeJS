import { addressMain, increaseAge, passportist, user, user2, users, userType } from "./09-01"


test("reference type test", () => {

    increaseAge(user);
    expect(user.age).toBe(20);
    const superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000);
})

test("array reference test", () => {

    const admins = users;
    admins.push({ name: "LeshaBandit", age: 13 });
    expect(admins[2]).toEqual({ name: "LeshaBandit", age: 13 });
})
test("value type test", () => {
    const usersCount = 100;
    let adminsCount = usersCount;

    adminsCount++;
    expect(adminsCount).toBe(101);
    expect(usersCount).toBe(100);
})

test("reference type test", () => {


   

    addressMain.title = "Oslo"
    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Oslo")
})


test("reference array type test", () => {

    const arr = [user, user2, {name: "Aik", age: 19, address: addressMain}]
    const admis = [user, user2]
    admis[0].name = "Vladimir"
    expect(user.name).toBe("Vladimir")
})


test("sort arr test", () => {

    const numbers = [3,2,5,4,1]
    numbers.sort()
    expect(numbers).toEqual([1,2,3,4,5])
    
    const letters = ["a","c","d","b"]
    passportist(letters)
    expect(letters).toEqual(["a","c","d","b"])
    const copy = passportist(letters)
    expect(copy).toEqual(["a","b","c","d"])

})
