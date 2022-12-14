import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactBook/ContactForm/ContactForm';
import ContactList from './ContactBook/ContactList/ContactList';
import Filter from './ContactBook/Filter/Filter';
import css from './ContactBook/ContactBook.module.css';
import { Section } from './ContactBook/Section/Section';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = userData => {
    let { contacts } = this.state;

    if (contacts.some(formData => formData.name === userData.name)) {
      alert(`${userData.name} is already in contacts`);
    } else {
      userData.id = nanoid(5);
      this.setState(prevState => ({
        contacts: [...prevState.contacts, userData],
      }));
    }
  };

  handleChangeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== userId),
    }));
  };

  filter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className={css.contact_wrap}>
        <Section title="Phonebook">
          <ContactForm onSubmitForm={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter filteredUsers={this.handleChangeFilter} />
          {this.state.filter ? (
            <ContactList users={this.filter()} onDeleteUser={this.deleteUser} />
          ) : (
            <ContactList
              users={this.state.contacts}
              onDeleteUser={this.deleteUser}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
