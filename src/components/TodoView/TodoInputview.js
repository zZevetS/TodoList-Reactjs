function TodoInputView ({onSetInputView}) {
    //Tim dung index cua du lieu r xoa bang filter
    const handleDelete = (deleteItem) => {
    //    onSetInputView((preValue) => {
    //         const seData = preValue.filter((item) => { //filter chi tra ra true/false
    //             const result = item !== deleteItem
    //             return result
    //         })
    //         return seData
    //     })
    }
    return (
        <div>
            {onSetInputView.map((data, index) => {
                return <li key={index}>{data}
                    <button  
                        style={{marginLeft: 12}}
                        onClick={() => handleDelete(data)}> Delete </button>
                </li>
                
            })}
        </div>
    )
} 
export default TodoInputView