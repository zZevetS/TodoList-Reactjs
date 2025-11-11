import { useRef, useState } from "react"
import ToDoInputView from "../TodoView/TodoInputview.js"
function TodoInput({onSave, nodeDataArr}){
    const [inputValue, setInputValue] = useState("")
    //focusInput
    const inputFocus = useRef(null)
    //
    const handleSave = () => {
        //luu array vao bien nay de luu vao State ben cha (Todolist)
        const inputArr = ([...nodeDataArr, inputValue])
        onSave(inputArr)// tien hanh luu

        setInputValue("")
        inputFocus.current.focus()
    }
    return (
        <div style={{padding: 20}}>
            <div>
                <strong>Please Add Some Note!</strong>
            </div>
            <input  
                ref={inputFocus}
                placeholder="Type here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSave}>Save!</button>
            <div style={{marginTop: 20}}/>
            <ToDoInputView onSetInputView={nodeDataArr}/>
        </div>
    )
}
export default TodoInput