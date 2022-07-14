import { useDispatch } from 'react-redux';
import RepoCard from '../RepoCard';
import "./index.css";

export default function UserCard(props) {
  const dispatch = useDispatch();
  const resetUser = () => {
    dispatch({ type: 'RESET_USER' });
  };
 
  return (
    <div className="profile-container">
      <img className="avatar" src={props.imageURL} alt={`${props.userName}`} />
      <h1>{props.userName}</h1>
      <button onClick={resetUser}>Close</button>
      <RepoCard />
    </div>
  );
}
