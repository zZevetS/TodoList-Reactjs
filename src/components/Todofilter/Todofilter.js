import { useState } from "react"
import TodoFilterView from "../TodoView/TodoFilterView.js"
function TodoFilter({nodeDataArr}){
    const [searchInput, setSearchInput] = useState("")
    const [searchArr, setsearchArr] = useState([])
    const [errorText, setErrorText] = useState("");
    //
    const handleSearch = () => {
        // dung du lieu tu nodeDataArr de loc
        const searchResult = nodeDataArr.filter((data) =>{
           return data.toLowerCase().includes(searchInput.toLowerCase())
        })
        setsearchArr(searchResult)
        //kiem tra neu field do trong
        if (searchInput.trim() === "") {
            setsearchArr([]); // clear kết quả
            return;
        }
        //Kiem ra xem co kqua khong
        if (searchResult.length === 0) {
            setErrorText("No result");
        } else {
        setErrorText("");
        }
    }
    return (
        <div style={{padding: 20}}>
            <div>
                <strong>Please Search Here</strong>
            </div>
            <input  
                //ref={inputFocus}
                placeholder="Type here..."
                value={searchInput}
                onChange= {(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search!</button>
            <div style={{marginTop: 20, color: "red"}}>{errorText}</div>
            <TodoFilterView onFilterList={searchArr}/>
        </div>
    )
}
export default TodoFilter