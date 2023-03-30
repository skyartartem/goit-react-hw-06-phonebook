import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {add, remove} from '../redux/contactsSlice'
import { change, reset } from '../redux/filterSlice';
import css from './App.module.css';

const CONTACTS = 'contacts';
const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(CONTACTS)) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const onChangeInput = evt => {
    setFilter(evt.currentTarget.value);
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      setContacts(old => {
        const list = [...old];
        list.push({
          id: nanoid(),
          name: name,
          number: number,
        });
        return  list ;
      });
    }
  };

  const filterFu = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const delContact = id => {
    const filtred = contacts.filter(item => item.id !== id);
    setContacts( filtred );
  };


  const conts = useSelector(state => state.contacts)
  const q = useSelector(state=> state.filter)
  const dispatch = useDispatch();

  const ipt = evt => dispatch(change(evt.target.value));

  // console.dir(change);
  return (
    <div className={css.conteiner}>
      <span>{conts.join(',')}</span>
      <button onClick={() => dispatch(add(1))}>add</button>
      <button onClick={() => dispatch(remove())}>remove</button>
      <input onChange={ipt} value={q} type="text" />
      <button onClick={() => dispatch(reset())}>reset</button>

      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeInput={onChangeInput} />
      <ContactList delContact={delContact} contacts={filterFu()} />
    </div>
  );
};
