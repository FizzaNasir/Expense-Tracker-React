export const addTransaction=(transaction)=>{
return(dispatch)=>{
        dispatch({
                type: "ADD_TRANSACTION",
                payload: transaction
        })
}}

export const deleteTransaction=(id)=>{
    return(dispatch)=>{
            dispatch({
                    type: "DELETE_TRANSACTION",
                    payload: id
            })
    }}