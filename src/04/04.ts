export const ages = [18, 20, 22, 1, 100, 90, 14];

export const predicate = (age:number) => age > 90

const oldAges = [100];//>90

export const courses = [
    {title: "css", price: 110}, 
    {title: "js", price: 200}, 
    {title: "react", price: 150}
]

export type CoursesType = {
    title: string
    price: number
}

export const chipPredicate = (course:CoursesType) => course.price < 160;
// export const chipPredicate = (course:CoursesType) => {
//     return course.price < 160;
// }
    

const chipCourses = [
    {title: "css", price: 110},
    {title: "react", price: 150}
]

export const tasks = [
    {id: 1, title: "Bread", isDone: false },
    {id: 2, title: "Milk", isDone: true},
    {id: 3, title: "Solt", isDone: false},
    {id: 4, title: "Sugar", isDone: true}
] 