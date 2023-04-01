import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state=>state.filter)
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <ul className={css.list}>
      {filteredContacts().map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <span>{contact.name}:</span>
            <span className={css.number}> {contact.number}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => {
                dispatch(remove(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
