import RepoItem from "../RepoItem";

export default function ReposList(props) {
  return (
    <div>
      <h1>{`${props.data[0].owner.login}' Repos`}</h1>
      {props.data.map((repo) => (
        <RepoItem data={repo} key={repo.id} />
      ))}
    </div>
  );
}
