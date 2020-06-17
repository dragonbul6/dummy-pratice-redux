export function Action_Setname(name){
    return {
        type : "ADD",
        payload : name
    }
}

export function itemsFetched(items){
    return {
        type:'Fetched',
        items
    }
}

export function fetchApi(url){
    return (dispatch) => {
        
        fetch(url)
        .then((res) => {
            if(!res.ok){
                console.log(res.statusText)
            }

            return res
        }).then((res) => res.json())
        .then((items) => dispatch(itemsFetched(items)))
        .catch(() => console.log('error'))
    }
}