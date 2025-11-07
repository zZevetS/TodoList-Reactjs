import { useState , useRef } from "react"

function TodoInput({onAddData}){ // truyen props tu ben kia vao
    const [save, setSave] = useState("")
    const focusInput = useRef(null) //1. tao ref vao input
    const handleSave = () => {
        if(save.trim() !== ""){ // kra neu co khoang trong thi khong thuc hien luu
            onAddData(save);
            setSave("") //clear input
            focusInput.current.focus()
        }
    }


    return(
        <div>
            <div style={{padding: 20}}>My To Do List</div>
            <div style={{padding: 10}}>
                <input
                    ref={focusInput} //2. gan ref vao input
                    placeholder="Type here..."
                    value={save}
                    onChange={(e) => setSave(e.target.value)}
                />
                <button  style={{marginLeft: 20}} onClick={handleSave}>Save!</button>
            </div>
        </div>
    )
}

export default TodoInput