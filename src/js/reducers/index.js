
export function items(state = [], action) {
    if(action.type === "Fetched"){
        return {
            items : action.items
        }
    }
    return state
}

