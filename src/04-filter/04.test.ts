import { ages, chipPredicate, courses, CoursesType, predicate, tasks } from "./04";

test("shoud take old men older then90", ()=> {
    const oldAges = ages.filter(age => age > 90);
    expect(oldAges.length).toBe(1);
})

test("shoud take courses chipper than 160", ()=> {
    const chipCourses = courses.filter(course => course.price < 160);
    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("css")
    expect(chipCourses[1].title).toBe("react")
})

test ("get only completed tasks", () => {
    const completedTasks = tasks.filter(task => !task.isDone)
    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)
})