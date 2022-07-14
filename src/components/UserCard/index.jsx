import { useDispatch } from 'react-redux';
import { resetUser } from '../../actions';

import './index.css';

export default function UserCard(props) {
  const dispatch = useDispatch();

  const resetButton = () => {
    dispatch(resetUser());
  };

  return (
    <div className="profile-container">
      <img className="avatar" src={props.imageURL} alt={`${props.userName}`} />
      <h1>{props.userName}</h1>
      <button onClick={resetButton}>Try a different user!</button>
    </div>
  );
}
