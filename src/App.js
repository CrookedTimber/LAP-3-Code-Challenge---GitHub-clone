import UsernameForm from './components/UsernameForm';
import NavBar from './components/Navbar';
import UserCard from './components/UserCard';
import { useSelector } from 'react-redux';

import './App.css';

function App() {
  const profileData = useSelector((state) => state.profileData);
  const show = useSelector((state) => state.showProfile);

  console.log(profileData.login, profileData.avatar_url, show);

  return (
    <>
      <NavBar />
      {!show && <UsernameForm />}
      {show && (
        <UserCard
          userName={profileData.login}
          imageURL={profileData.avatar_url}
        />
      )}
    </>
  );
}

export default App;
