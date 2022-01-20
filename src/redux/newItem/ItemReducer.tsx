export type Item = {
name : string,
id: number
}[]
export type StateProps = {
    item : Item | null
}
type ItemDataAction = {
    type : 'item-data',
    result : Item | null
}
const initialState = {
    item:null as (null | []),
}

const TestReducer = (state:StateProps = initialState ,action:ItemDataAction) => {
     console.log({type:action.type})
     switch(action.type){
         case 'item-data':
             return {
                 ...state,
                 item: action.result ,
             } ;
 
             default: 
             return state;
     }
 }
 export default TestReducer;