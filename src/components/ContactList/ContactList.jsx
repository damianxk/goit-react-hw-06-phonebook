import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredArray = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredArray.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button
            type="button"
            className={css.button}
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
