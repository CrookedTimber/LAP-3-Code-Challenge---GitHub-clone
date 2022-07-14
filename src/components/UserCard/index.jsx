import { useDispatch } from 'react-redux';
import { Button, Card } from "react-bootstrap";
import { resetUser } from '../../actions';

import './index.css';

export default function UserCard(props) {
  const dispatch = useDispatch();

  const resetButton = () => {
    dispatch(resetUser());
  };

  return (
    <Card className="profile-container">
      <Card.Img className="avatar" src={props.imageURL} alt={`${props.userName}`} />
      <Card.Header className="profile-header">{props.userName}</Card.Header>
      <Button className="close-button shadow" onClick={resetButton}>Try a different user!</Button>
    </Card>
  );
}
