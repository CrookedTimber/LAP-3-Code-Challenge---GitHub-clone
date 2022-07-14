import axios from 'axios';
import "./index.css";

export default function RepoCard(username) {
  return async (dispatch) => {
    try {
        dispatch( {type: "STARTING_FETCH" })
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
        let allRepos = []
        for(let i = 0; i < data.length; i++){
            let repo = {
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
    } catch(err) {
        dispatch({ type: "SET_ERROR", payload: err })
    }
};
};
