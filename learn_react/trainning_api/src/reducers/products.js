var initialState = [
    {
        id : 1,
        name : "SS galaxy"
    },
    {
        id : 2,
        name : "IPhone"
    },
]

const products = (state = initialState, action) => {
    switch(action.type)
    {
        default: return [...state]
    }
}

export default products