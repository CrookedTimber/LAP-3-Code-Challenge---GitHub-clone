import React from "react";

const RepoPage = ({ handleRepo, allRepos, error }) => {
    if(error){
        return(
        <div id='repos'>
                <p>No User Found</p>
        </div>
        );
    }else if(allRepos.length>1){
        return (
            <>
            <p>Click on one of the repositories below to see more information</p>
            <div id='repos-grid'>
                    {allRepos.map(repo => (
                        <div key={repo.repoName} onClick={() => handleRepo(repo)}>
                            <li>Name: {repo.repoName} </li>
                            <br></br>
                            <li> <a href={repo.link} target="_blank" rel="noreferrer"> Link </a> </li>
                        </div>
                    ))}
            </div>
            </>
        );
    }
    else{
        return (
            <div id='repos'>
                <p>No Repositories to display</p>
            </div>
        );
    }
    
};

export default RepoPage;