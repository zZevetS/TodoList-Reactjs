import { useState } from "react";
function TodoInputView ({onInputView, onSetInputView}) {
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    //Find correct Index and clear it with filter
    const handleDelete = (dataToDelete) => {
        onSetInputView(onInputView.filter((item) => {
            return item !== dataToDelete
        }))
    }
    // EDIT 1 VALUE ON ARRAY
    const handleEdit = (data , index) => {
        // Pass value to State
        setEditIndex(index)
        setEditValue(data)
    }
    const handleSaveEdit =(index) => {
        //make a copy of array and save it on value
        const updateValue = [...onInputView];
        //update new value into array
        updateValue[index] = editValue
        //
        onSetInputView(updateValue);
        setEditIndex(null)
    }
    return (
        <div>
            {onInputView.map((data, index) => {
                return <div>
                        <div style={{
                                width: 250, 
                                display: "flex", 
                                flexDirection:"row",
                                justifyContent: "space-between",
                            }}>
                            <div style={{width: "max-content"}}>
                                <li key={index}>{data}</li>
                            </div>
                            <div style={{width: "max-content"}}>
                                <button  
                                style={{marginLeft: 12}}
                                onClick={() => {handleDelete(data)}}> Delete </button>
                                <button  
                                    style={{marginLeft: 12}}
                                    onClick={() => {handleEdit(data , index)}}> Edit </button>
                            </div>
                        </div>
                        {/* Edit Value */}
                        {editIndex === index && (
                            <div> 
                                <div/> 
                                <input
                                    style={{marginTop: 8, marginBottom: 8 }} 
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />
                                 <button style={{ marginLeft: 8 }} onClick={() => handleSaveEdit(index)}>Save</button>
                            </div>
                        )}
                </div>
                
            })}
        </div>
    )
} 
export default TodoInputView