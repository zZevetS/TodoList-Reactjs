import { useRef, useState } from "react"
import ToDoInputView from "../TodoView/TodoInputview.js"
function TodoInput({nodeDataArr, onSetSave}){
    const [inputValue, setInputValue] = useState("")
    //focusInput
    const inputFocus = useRef(null)
    //
    const handleSave = () => {
        //luu array vao bien nay de luu vao State ben cha (Todolist)
        const inputArr = ([...nodeDataArr, inputValue])
        onSetSave(inputArr)// tien hanh luu

        setInputValue("")
        inputFocus.current.focus()
    }
    // Clear All Data on Array
    const handleDeleteAll = () => { 
        onSetSave([])
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
            <button style={{marginLeft: 12}}onClick={handleDeleteAll}>Delete All!</button>
            <div style={{marginTop: 20}}/>
            <ToDoInputView onInputView={nodeDataArr} onSetInputView={onSetSave}/>
        </div>
    )
}
export default TodoInput