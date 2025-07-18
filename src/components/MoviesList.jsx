import { Link } from "react-router-dom";

const MoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`${id}`}>{title}</Link>
    </li>
  ));
  return <ul>{elements}</ul>;
};
export default MoviesList;
