import { TestData } from '../../dummydata/TestData';
export type Test = {
name : string,
id: number
}[]

export type StateProps = {
    test : Test
}

type TestDataAction = {
    type : 'test-data',
    result : Test
}


const initialState = {
    test:TestData
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