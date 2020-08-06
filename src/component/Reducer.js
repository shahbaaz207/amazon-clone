
export const initialState={
    basket:[],
    user:null
};

export const getBasketTatal=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0)


function reducer(state,action){
    switch(action.type){
        case "SET_USER" :
            return{
                ...state,
                user:action.user
            }

        case "ADD_TO_BASKET":
        // Loginfor adding item to basket
        console.log(action)
        return {
            // return to new value data layout
            ...state,
            basket:[...state.basket,action.item],
            
        }
        case "REMOVE_FROM_BASKET":            
        // loginfor remove form basket item

        // i cloned the basket
            let newBasket=[...state.basket]

            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)

            if(index>=0){
                // exist n basket
                newBasket.splice(index,1)
            } else{
               console.warn(`cont remove product (id:${action.id}) as its`)
            }
        return {
            ...state,basket:newBasket
        }
        default:
            return state
    }
}

export default reducer