export const reducer = (state, action) => {
    switch (action.type) {
        case "title":
            return { ...state, title: action.payload };
        case "name":
            return { ...state, name: action.payload };
        default:
            throw new Error();
    }
};
