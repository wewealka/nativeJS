

export type userType = {
    name: string
    age: number
    address: {title:string}
}

export const addressMain = {
    title: "Minsk"
}
export const user = {
    name: "Vova",
    age: 19,
    address: addressMain
}

export const user2:userType = {
    name: "Misha",
    age: 19,
    address: addressMain
}

export const users = [
    {
        name: "Vova",
        age: 19
    },
    {
        name: "Sasha",
        age: 18
    },
]

export function increaseAge(u: userType) {
    u.age++;
}

export function passportist (letters:string[]) {
    const copy = [...letters].sort()
    return copy
}