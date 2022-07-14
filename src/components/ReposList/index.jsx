import { Card } from "react-bootstrap";
import RepoItem from "../RepoItem";
import "./index.css";

export default function ReposList(props) {
  return (
    <Card className="repo-card">
      <h1 className="card-header">{`${props.data[0].owner.login}'s Repos`}</h1>
      {props.data.map((repo) => (
        <RepoItem data={repo} key={repo.id} />
      ))}
    </Card>
  );
}
