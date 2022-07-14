import axios from 'axios';
import { singleRepoSetter } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faJs,
  faHtml5,
  faPython, faPhp
} from '@fortawesome/free-brands-svg-icons';

export default function RepoItem(props) {
  const isSingleRepo = useSelector((state) => state.isSingleRepo);
  const dispatch = useDispatch();

  const setSingleRepo = async (url) => {
    try {
      const result = await axios.get(url);
      dispatch(singleRepoSetter([result.data]));
    } catch (error) {
      console.warn(error.message);
    }
  };

  const handleSingleRepoClick = (e) => {
    setSingleRepo(e.target.attributes.apiurl.value);
  };

  const dateFormat = (date) => {
    const jsDate = new Date(date);
    const formatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    let dateString = jsDate.toLocaleDateString('en-GB', formatOptions);

    dateString = dateString
      .replace(',', '')
      .replace('PM', 'p.m.')
      .replace('AM', 'a.m.');

    return dateString;
  };

  const iconSwitch = (language) => {
    switch (language) {
      case 'JavaScript':
        return <FontAwesomeIcon icon={faJs} />;
      case 'CSS':
        return <FontAwesomeIcon icon={faCss3} />;
      case 'HTML':
        return <FontAwesomeIcon icon={faHtml5} />;
      case 'Python':
        return <FontAwesomeIcon icon={faPython} />;
        case 'PHP':
        return <FontAwesomeIcon icon={faPhp} />;
      default:
        return language;
    }
  };

  return (
    <div>
      <h2 onClick={handleSingleRepoClick} apiurl={props.data.url}>
        {props.data.name}
      </h2>

      {isSingleRepo && <a href={props.data.html_url}>Visit on GitHub</a>}
      {isSingleRepo && props.data.fork && (
        <p>
          Forked from
          <a href={props.data.parent.html_url}>{props.data.parent.full_name}</a>
        </p>
      )}
      <p>{props.data.description}</p>
      <p>{iconSwitch(props.data.language)}</p>
      {isSingleRepo && <p>{`Stargazers: ${props.data.stargazers_count}`}</p>}
      <p>{`Creation: ${dateFormat(props.data.created_at)}`}</p>
      <p>{`Last update: ${dateFormat(props.data.updated_at)}`}</p>
    </div>
  );
}
