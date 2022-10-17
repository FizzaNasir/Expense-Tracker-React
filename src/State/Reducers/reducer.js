
 const reducer=(state=JSON.parse(localStorage.getItem('transactions'))||[], action)=>{
    let transactions;
    switch(action.type){
        case "ADD_TRANSACTION":
            transactions=[action.payload , ...state]
            localStorage.setItem('transactions', JSON.stringify(transactions))
            return transactions;

        case "DELETE_TRANSACTION":
            transactions=state.filter((t)=>t.id!==action.payload) //get all the data other than obj having t.id==action.payload
            localStorage.setItem('transactions', JSON.stringify(transactions))
            return transactions;

        // case "BALANCE":
        //      return state.reduce((acc, currVal)=>currVal.type==='Expense'? acc-currVal.amount : acc+currVal.amount,0)    

        default:
           return state;    
    }
}
export default reducer;