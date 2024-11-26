import { users } from "./08-01"


beforeEach (()=> {
    
})

test("check corresponding user", ()=>{
    expect(users["101"].name).toBe('vova')
    expect(users["3232312"].name).toBe('lesha')
    expect(users["1212"].name).toBe('misha')
    expect(users["1"].name).toBe('sasha')
})
test("check corresponding user", ()=>{
    expect(users["101"]).toEqual({ id: 101, name: 'vova' })
    expect(users["3232312"]).toEqual({ id: 3232312, name: 'lesha' })
    expect(users["1212"]).toEqual({ id: 1212, name: 'misha' })
    expect(users["1"]).toEqual({ id: 1, name: 'sasha' })
})
test("should update corresponding user", ()=>{
    users["1"].name = 'Alexandra'
    users["1212"].name = 'Mikhail'
    users["3232312"].name = 'Alexey'
    users["101"].name = 'Vladimir'

    expect(users["101"].name).toBe('Vladimir')
    expect(users["3232312"].name).toBe('Alexey')
    expect(users["1212"].name).toBe('Mikhail')
    expect(users["1"].name).toBe('Alexandra')
})
test("should delete corresponding user", ()=>{
    delete users["1"]
    delete users["1212"]
    delete users["3232312"]
    delete users["101"]

    expect(users["101"]).toBe(undefined)
    expect(users["101"]).toBeUndefined()
    expect(users["3232312"]).toBe(undefined)
    expect(users["3232312"]).toBeUndefined()
    expect(users["1212"]).toBe(undefined)
    expect(users["1212"]).toBeUndefined()
    expect(users["1"]).toBe(undefined)
    expect(users["1"]).toBeUndefined()
})