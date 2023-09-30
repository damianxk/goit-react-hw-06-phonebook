import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(addFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <input
        type="text"
        name="filter"
        className={css.inputFilter}
        placeholder="Find contacts"
        onChange={handleFilter}
      />
    </div>
  );
};
