import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  const handleFormSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    if (
      contacts.some(
        person => person.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} already in contacts`);
    }
    dispatch(addContact(contact));
    event.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <input
        className={css.inputName}
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        autoComplete="off"
      />
      <input
        className={css.inputNumber}
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"
        autoComplete="off"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
