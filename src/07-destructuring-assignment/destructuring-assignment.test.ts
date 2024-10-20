import { PropsType } from "./Destructuring";


let props:PropsType;


beforeEach(() => {
    props = {
        name: "Sasha",
        age: 18,
        lessons: [{ title: "1" }, { title: "2" }, { title: "3" },],
        address: {
            street: {
                title: "Rokossovskogo Avenue"
            }
        }
    }
})


test("", () => {
    const { age, lessons } = props
    const { title } = props.address.street

    expect(age).toBe(18)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Rokossovskogo Avenue")
})

test("", () => {

    const { age, lessons} = props
    const { title } = props.address.street
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    const [ls1, ls2] = props.lessons
    const [ls01] = props.lessons
    const [ , ls02] = props.lessons
    const [,,ls3] = props.lessons
    const [lesn1, ...resetLes] = props.lessons
    const [, lesn2, ...resetLesns] = props.lessons

    expect(age).toBe(18)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Rokossovskogo Avenue")
    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")
    expect(ls01.title).toBe("1")
    expect(ls02.title).toBe("2")
    expect(ls3.title).toBe("3")
    expect(lesn1.title).toBe("1")
    expect(resetLes.length).toBe(2)
    expect(lesn2.title).toBe("2")
    expect(resetLesns.length).toBe(1)
    expect(resetLesns[0]).toEqual({"title": "3"})
    expect(resetLesns[0].title).toBe("3")
    
})

