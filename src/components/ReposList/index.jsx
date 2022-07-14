import axios from 'axios';
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import RepoItem from "../RepoItem";
import { reposDataSetter, setError404 } from '../../actions';
import "./index.css";

export default function ReposList(props) {
  const dispatch = useDispatch();
  const isSingleRepo = useSelector((state) => state.isSingleRepo);

  const setUserData = async (query) => {
    try {
      const result = await axios.get(
        `https://api.github.com/users/${query}/repos`
      );
      dispatch(reposDataSetter(result.data));
    } catch (error) {
      dispatch(setError404());
      console.warn(error.message);
    }
  };

  function repositoriesButton() {
    setUserData(props.data[0].owner.login);
  }

  return (
    <Card className="repo-card">
      <h1 className="card-header">{`${props.data[0].owner.login}'s Repos`}</h1>
      <h3>Click on a repository name to get more details!</h3>
      {props.data.map((repo) => (
        <RepoItem data={repo} key={repo.id} />
      ))}
      {isSingleRepo && (
        <button className="back-to-repos-btn" onClick={repositoriesButton}>Back to all repositories</button>
      )}
    </Card>
  );
}
