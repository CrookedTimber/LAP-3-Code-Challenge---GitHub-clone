import { useDispatch } from 'react-redux';

export default function UserCard(props) {
  const dispatch = useDispatch();
  const resetUser = () => {
    dispatch({ type: 'RESET_USER' });
  };

  return (
    <div>
      <img src={props.imageURL} alt={`${props.userName}`} />
      <h1>{props.userName}</h1>
      <button onClick={resetUser}>Close</button>
    </div>
  );
}
