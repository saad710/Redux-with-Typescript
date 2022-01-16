type UpdateAction = {
    type: 'test-data' | 'pro-data'
    result: {}[]
  }

  type initialProps = {
     test : {}[],
     pro : []
  }


const INIT_STATE:initialProps = {
    test:[
     {
         "name" : "saad",
         "id" : "5"
     },
     {
         "name" : "ifrat",
         "id" : "6"
     },
     
 ],
 pro: [],
   };

 
 const TestReducer = (state =INIT_STATE ,action:UpdateAction) => {
     console.log({type:action.type})
     switch(action.type){
         case 'test-data':
             return {
                 ...state,
                 test: action.result ,
             } ;
             case 'pro-data':
             return {
                 ...state,
                 pro:action.result ,
             } ;
 
             default: 
             return state;
     }
 }
 export default TestReducer;