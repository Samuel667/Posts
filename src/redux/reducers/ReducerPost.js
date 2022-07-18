  const initialState =[]

 export  const ReducerPosts =(state = initialState, action) =>{
    switch (action.type) {
        case "ActionTypes.SET_PHOTO":
          return  action.payload;
            default: return state;
    }
 }
  