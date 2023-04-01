import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { change} from '../../redux/filterSlice';

export const Filter = () => {
  const query = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={evt => dispatch(change(evt.currentTarget.value))}
          value={query}
          type="text"
          name="filter"
        />
      </label>
      <br />
    </>
  );
};
