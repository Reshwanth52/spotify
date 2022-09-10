export const intialState = null

export const reducer =(state,action)=>{
    if(action.type === 'UPDATE'){
        return ({
            ...state,
            songs: action.payload.data
        })
    }
    
    return state

}