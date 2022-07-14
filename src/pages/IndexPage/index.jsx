import { UsernameForm, UserCard, Welcome, ReposList } from '../../components';

import { useSelector } from 'react-redux';

import './index.css';

const IndexPage = () => {
  const profileData = useSelector((state) => state.profileData);
  const show = useSelector((state) => state.showProfile);
  const repoData = useSelector((state) => state.repoData);

  console.log(profileData.login, profileData.avatar_url, repoData.data, show);

  return (
    <>
      <div className="flex-container">
        <h4>Enter a GitHub Username below to display public repositories:</h4>
        {!show && (
          <>
            <UsernameForm /> <Welcome />{' '}
          </>
        )}
        {show && (
          <>
            <UserCard
              userName={profileData.login}
              imageURL={profileData.avatar_url}
            />
            <ReposList data={repoData} />
          </>
        )}
      </div>
    </>
  );
};

export default IndexPage;
