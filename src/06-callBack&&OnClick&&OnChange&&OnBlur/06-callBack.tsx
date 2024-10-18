import { ChangeEvent, MouseEvent } from "react"

export const User = () => {

    const DeleteUser = (e:MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name  )
    }
    const Age = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("age: " + e.currentTarget.value)
    }
    const onNameChange = () => {
        console.log("nameChanged")
    }
    const onFocuusLost = () => {
        console.log("focus lost")
    }

    return (
        <div>
            <textarea
                onChange={onNameChange}
                onBlur={onFocuusLost}
            >Sasha
            </textarea>
            <input
                onChange={Age}
                type="number"
            />
            <button name="del" onClick={DeleteUser}>x</button>
            <button name="save" onClick={DeleteUser}>x</button>
        </div>
    )
}
