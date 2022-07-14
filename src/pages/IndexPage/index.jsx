import { UsernameForm, UserCard, Welcome, ReposList } from '../../components';
import NotFound from '../NotFound';

import { useSelector } from 'react-redux';

import './index.css';

const IndexPage = () => {
  const profileData = useSelector((state) => state.profileData);
  const show = useSelector((state) => state.showProfile);
  const repoData = useSelector((state) => state.repoData);
  const userExists = useSelector((state) => state.userExists);

  return (
    <>
      <div className="flex-container">
                
        {!show && <Welcome /> }
        {!show && userExists && <UsernameForm /> }
        {!userExists && <NotFound />}
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
