const initState = {
    posts: [
        {id: '1', title: 'Squirtle laid an egg', body: 'Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint Sed quibusdam recusandae alias error harum maxime adipisci amet laborum'},
        {id: '2', title: 'Charmander laid an egg', body: 'Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint Sed quibusdam recusandae alias error harum maxime adipisci amet laborum'},
        {id: '3', title: 'Bulbasaur laid an egg', body: 'Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint Sed quibusdam recusandae alias error harum maxime adipisci amet laborum'}
    ]
}
const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer