import axios from 'axios';

export const fetchUser = (username)=>{
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
            let allRepos = []
            for(let i = 0; i < data.length; i++){
                let repo = {
                    userName: username,
                    avatar: data[i].avatar_url,
                    repoName: data[i].name,
                    link: data[i].html_url,
                    description: data[i].description,
                    languages: data[i].languages_url,
                    stargazers: data[i].stargazers_count,
                    starred: data[i].starred_url,
                    forks: data[i].forks_url,
                    updated: data[i].updated_at,
                    followers: data[i].followers_url,
                    collaborators: data[i].collaborators_url
                }
                allRepos.push(repo)
            }
            dispatch({type: 'LOAD_REPOS', payload: allRepos})
            }
        catch (err){
            console.warn(err.message);
            dispatch({ type: 'ERROR', payload: err.message })
        };
    };
};