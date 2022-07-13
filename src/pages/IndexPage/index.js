import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserNameForm from '../../components/UsernameForm';
import { SelectedRepo, RepoPage } from "../index";
import { fetchUser } from '../../actions'

const IndexPage = () => {
    const allRepos = useSelector(state=>state.repos);
    const error = useSelector(state=>state.error);

    const [ repo, setRepo ] = useState('');
    const dispatch = useDispatch();
    const search = searchTerm => dispatch(fetchUser(searchTerm));

    return(
        <>
        <div className="flex-container">
                                
            <h1> Welcome to your GitHub Repo Tracker</h1>
           
        </div>
        <h4>Enter a GitHub Username below to display public repositories:</h4>
        <UserNameForm fetchUser={search} setRepo={setRepo}/>
        { repo && !error ? <SelectedRepo repo={repo} error={error}/> : <></>}
        <RepoPage allRepos={allRepos} error={error} handleRepo={setRepo}/>
        </>
    )
};

export default IndexPage;