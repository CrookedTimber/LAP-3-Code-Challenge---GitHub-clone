import Navbar from './components/Navbar';
// import UsernameForm from './components/UsernameForm';
// import UserCard from './components/UserCard';
// import { useSelector } from 'react-redux';

import './App.css';
import { IndexPage } from './pages';


function App() {
  // const profileData = useSelector((state) => state.profileData);
  // const show = useSelector((state) => state.showProfile);
  // const repoData = useSelector((state) => state.repoData);

  
  return (
    <>
      <Navbar />
      <IndexPage />
      {/* {!show && <UsernameForm />}
      {show && (
        <UserCard
          userName={profileData.login}
          imageURL={profileData.avatar_url}
          repoList={profileData.repoData}
        />
      )} */}
    </>
  );
}

export default App;
