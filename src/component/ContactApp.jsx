import ContactList from "./ContactList";
import { getData } from "../utils/data";
import React from "react";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: getData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onAddContactHandler = this.onAddContactHandler.bind(this)
  }

  onDeleteHandler(id){
    const contacts = this.state.contacts.filter(contact => contact.id !==id)
    this.setState({contacts})
  }

  onAddContactHandler({name, tag}){
    this.setState((prevState)=>{
      return {
        contacts : [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/default.jpg'
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Contact List</h1>
        <h3>Tambah Kontak</h3>
        <ContactInput addContact={this.onAddContactHandler}/>
        <h3>Daftar Kontak</h3>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    )
  }
}

export default ContactApp