import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserNameForm from '../../components/UsernameForm';
import { SelectedRepo, RepoPage } from "../index";
import { loadRepos } from '../../actions'

const IndexPage = () => {
    const allRepos = useSelector(state=>state.repos);
    const error = useSelector(state=>state.error);
    const [ ownerRepo, setOwnerRepo ] = useState({});
    const dispatch = useDispatch();
    const search = searchTerm => dispatch(loadRepos(searchTerm));

    return(
        <>
        <div className="flex-container">
                                
            <h1> Welcome to your GitHub Repo Tracker</h1>
           
        </div>
        <h4>Enter a GitHub Username below to display public repositories:</h4>
        <UserNameForm loadRepos={search} setOwnerRepo={setOwnerRepo}/>
        { ownerRepo && !error ? <SelectedRepo ownerRepo={ownerRepo} error={error}/> : <></>}
        <RepoPage allRepos={allRepos} error={error} handleRepo={setOwnerRepo}/>
        </>
    )
};

export default IndexPage;