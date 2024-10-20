import { useState } from "react"

type LessonsType = {
    title:string
}

type StreetType = {
    title: string
}

type AddressType = {
    street:StreetType
}

export type PropsType = {
    name: string
    age: number
    lessons: Array<LessonsType>      // lessons: Array<{title:string}>  
    address: AddressType              // address: {street: {title:string}}
}

type DestructuringType = {
    title: string
    man: PropsType
    food: Array<string>
    car: {title:string, model:string}
}


function useVovasState (m:string) {
    return [m, function (){}]
}
function useVovasState1 (m:string) {
    return {
        massege: m, 
        setMassege: function (){}
    }
}

export const DestructuringComponent: React.FC<DestructuringType> = ({title, man: {name}, ...props}) => {

    const [massege, setMassege] = useState("hello")  // Returns a stateful value, and a function to update it.// димыч сказал возращаем массив и таким синтаксисом достаем отдельные части 
    // const {title, man: {name}} = props
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
            <div>{props.car.model}</div>
        </div>
    )
}