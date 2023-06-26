import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils';
// import ContactInput from './ContactInput';
 
class Content extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getInitialData(),
   }
 
//    this.onDeleteHandler = this.onDeleteHandler.bind(this);
//    this.onAddContactHandler = this.onAddContactHandler.bind(this);
}
 
//  onDeleteHandler(id) {
//    const contacts = this.state.contacts.filter(contact => contact.id !== id);
//    this.setState({ contacts });
//  }

//  onAddContactHandler({ name, tag }) {
//   this.setState((prevState) => {
//     return {
//       contacts: [
//         ...prevState.contacts,
//         {
//           id: +new Date(),
//           name,
//           tag,
//           imageUrl: '/images/default.jpg',
//         }
//       ]
//     }
//   });
// }
 
 render() {
   return (
    <div className="note-app__body">
       <h2>Buat Catatan</h2>
       {/* <ContactInput addContact={this.onAddContactHandler} /> */}
       <h2>Catatan Aktif</h2>
       <NoteList notes={this.state.notes} />
       <h2>Arsip</h2>
    </div>
   );
 }
}
 
export default Content;