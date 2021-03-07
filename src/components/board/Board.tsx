import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootReducer';
import List from '../list/List';
import './Board.scss';

const Board = () => {
  const { board } = useSelector((state: AppState) => state);
  const { lists, title } = board;
  return (
    <div className="Board">
      <div>{title}</div>
      <div className="ListContainer">
        {lists.map((list) => (
          <List key={`${list.title}-${list.id}`} {...list} />
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Board;
