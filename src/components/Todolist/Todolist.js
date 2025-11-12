import TodoInput from "../Todoinput/Todoinput.js"
import TodoFilter from "../Todofilter/Todofilter.js"
import { useState } from "react"
function TodoList(){
    // cap nhat State(gia tri tu mang vao day de truyen di cho Filter)
    // dong thoi hien thi cho InputView (nang len State Cha)
    const [inputArr, setInputArr] = useState([])
    return(
     <div>
        <TodoInput  nodeDataArr = {inputArr} onSetSave={setInputArr}/>
        <TodoFilter nodeDataArr = {inputArr}/>
     </div>   
    )
}
export default TodoList