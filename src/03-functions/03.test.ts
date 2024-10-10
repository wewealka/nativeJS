import { manType } from "../02-objects/02"
import { addingSkill, DoesManLiveInMinsk, madeManActive } from "./03"

let man: manType

beforeEach(() => {
    man = {
        id: 1,
        name: "vova",
        age: 12,
        isActive: false,
        address: {
            streetTitle: "Rokossovskogo 5/1",
            city: {
                title: "Minsk",
                countryTitle: "RB"
            }

        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "TS/JS"
            },
        ]
    }
})

test("new skill should be added to students object", () => {
    expect(man.technologies.length).toBe(3);

    addingSkill(man, "React");

    expect(man.technologies.length).toBe(4);
    expect(man.technologies[3].title).toBe("React");
    expect(man.technologies[3].id).toBeDefined();
})

test("man should be made to active", () => {
    expect(man.isActive).toBe(false);
    madeManActive(man);
    expect(man.isActive).toBe(true);
})

test("man lives in Minsk", () => {;

    let result1 = DoesManLiveInMinsk(man, "Moscow");
    let result2 = DoesManLiveInMinsk(man, "Minsk");
    expect(result1).toBe(false);
    expect(result2).toBe(true);

})