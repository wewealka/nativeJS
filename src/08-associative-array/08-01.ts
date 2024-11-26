export const usersArray = ['vova', 'lesha', 'misha', 'sasha']

export const usersObj = {
    '0': 'vova',
    '1': 'lesha',
    '2': 'misha',
    '3': 'sasha'
}

type usersType = {
    [key:string]: {id: number, name: string}
}

export const users: usersType = {
    '101': { id: 101, name: 'vova' },
    '3232312': { id: 3232312, name: 'lesha' },
    '1212': { id: 1212, name: 'misha' },
    '1': { id: 1, name: 'sasha' }
}


var user = {id:100500, name: 'aik'}

users[user.id] = user;
users[user.id].name = 'pedro';
delete users[user.id]


export const usersArray1 = [
    { id: 101, name: 'vova' },
    { id: 3232312, name: 'lesha' },
    { id: 1212, name: 'misha' },
    { id: 1, name: 'sasha' }
]