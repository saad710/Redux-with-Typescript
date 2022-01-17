type Test = {
name : string,
id: number
}

type StateProps = {
    test : Test[]
}

type TestDataAction = {
    type : 'test-data',
    result : Comment[]
}



const initialState = {
    test:[
             {
                 "name" : "saad",
                 "id" : 5
             },
             {
                 "name" : "ifrat",
                 "id" : 6
             },
    ]
   
}

 
 const TestReducer = (state:StateProps = initialState ,action:TestDataAction) => {
     console.log({type:action.type})
     switch(action.type){
         case 'test-data':
             return {
                 ...state,
                 test: action.result ,
             } ;
 
             default: 
             return state;
     }
 }
 export default TestReducer;