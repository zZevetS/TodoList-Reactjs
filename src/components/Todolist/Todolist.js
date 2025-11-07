import { useState } from "react"
import TodoInput from "../Todoinput/Todoinput"
function TodoList(){
    const [datas, setDatas] = useState([ ])

    const handleAddData = (save) => {
        setDatas((prev) => [...prev, save])
    } 

    // const handleDelete = (deteleItem) => {
    //     setDatas(prev => prev.filter((item) => {
    //             return item !== deteleItem     //tra ve nhung phan tu khac voi deleteItem khi no truyen vao ben duoi
    //         })
    //     )
    // };

    const handleDelete = (deleteItem) => {
        setDatas((preValue) => {
            const seData = preValue.filter((item) => { //filter chi tra ra true/false
                const result = item !== deleteItem
                return result
            })
            return seData
        })
    }
    return(
       <div>
            {/* Truyen props vao compornet trc de nhan data tu todoInput */}
            <TodoInput onAddData={handleAddData}/> 
            <div style={{marginLeft: 10,fontWeight: 500}}>
                My listed:
                <ul>
                    {datas.map((saveData, index) => {
                        return <div key={index} style={{display: "flex", marginTop: 12}}>
                                <li> {saveData} </li>
                                <button  
                                    style={{marginLeft: 12}}
                                    onClick={() => handleDelete(saveData)}> Delete </button>
                        </div>
                    })}
                </ul>
            </div>
       </div>
    )
}

export default TodoList