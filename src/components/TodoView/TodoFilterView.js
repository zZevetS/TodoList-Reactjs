function TodoFilterView({onFilterList}){
    return(
        <div>
            <div>Result
                {onFilterList.map((curValue, index) => {
                    return <li key={index}>{curValue}</li>
                })}
            </div>
        </div>
    )
}
export default TodoFilterView