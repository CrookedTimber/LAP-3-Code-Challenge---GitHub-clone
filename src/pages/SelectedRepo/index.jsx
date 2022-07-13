import React, { useState, useEffect } from 'react';

const SelectedRepo = ({repo}) => {
   
    const [ repoData, setRepoData ] = useState([]);

    useEffect(() => {
        async function fetchRepoData() {
            try {
                const result = await fetch('https://api.github.com/repos/{owner}/{repo}', {
                    owner: 'OWNER',
                    repo: 'REPO'
                })
                setRepoData(result.data);
            } catch(err) {
                console.log(err);
            }
        }

        fetchRepoData(repoData);
    }, [repoData, setRepoData])
    
        
    return(
        <div className="flex-container">
            <div id="featured-box">
            <h3><a href={repo.link} target="_blank" rel="noreferrer">{repo.repoName}</a></h3>
            <div id="featured-data">
            </div>
            </div>
        </div>
    );
}
   
export default SelectedRepo; 