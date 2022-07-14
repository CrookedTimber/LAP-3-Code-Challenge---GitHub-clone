import UsernameForm from '../../components/UsernameForm';
import UserCard from '../../components/UserCard';
import { useSelector } from 'react-redux';

import "./index.css";

const IndexPage = () => {
    const profileData = useSelector((state) => state.profileData);
    const show = useSelector((state) => state.showProfile);
    const repoData = useSelector((state) => state.repoData);
  
    console.log(profileData.login, profileData.avatar_url, repoData.data, show);

    return(
        <>
        <div className="flex-container">
                                
            <h1> Welcome to your GitHub Repo Tracker</h1>
           
        
        <h4>Enter a GitHub Username below to display public repositories:</h4>
        {!show && <UsernameForm />}
      {show && (
        <UserCard
          userName={profileData.login}
          imageURL={profileData.avatar_url}
          repos={profileData.repoData}
        />
      )}
      </div>
        </>
    )
};

export default IndexPage;