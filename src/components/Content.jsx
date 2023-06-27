import React from 'react';
import NoteList from './NoteList';
import Header from './Header';
import { getInitialData } from '../utils';
// import ContactInput from './ContactInput';
 
class Content extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getInitialData(),
     unfilteredNotes: getInitialData()
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onArchiveHandler = this.onArchiveHandler.bind(this);
   this.onSearchHandler = this.onSearchHandler.bind(this);
   // this.onAddContactHandler = this.onAddContactHandler.bind(this);
}
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({ notes });
 }

 onArchiveHandler(id) {
  const notes = this.state.notes.map(note => note.id === id ? {...note, archived : !note.archived} : note)
  this.setState({notes});
}

onSearchHandler(query) {
  if (query.length !== 0 && query.trim() !== '') {
      this.setState({
          notes: this.state.unfilteredNotes.filter(note => note.title.toLowerCase().includes(query.toLowerCase())),
      })
  } else {
      this.setState({
          notes: this.state.unfilteredNotes,
      })
  }
}

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
    const notes = this.state.notes

    const daftarNote = notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNote = notes.filter((note) => {
      return note.archived === true;
    });
    
    return (
    <div>
    <Header onSearch={this.onSearchHandler}/>
    <div className="note-app__body">
       <h2>Buat Catatan</h2>
       {/* <ContactInput addContact={this.onAddContactHandler} /> */}
       <h2>Catatan Aktif</h2>
       {daftarNote.length > 0 ? 
        <NoteList notes={daftarNote} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        :<p className="notes-list__empty-message">Tidak ada catatan</p>
       }
       <h2>Arsip</h2>
       {archivedNote.length > 0 ? 
        <NoteList notes={archivedNote} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
        :<p className="notes-list__empty-message">Tidak ada catatan</p>
       }
    </div>
    </div>
    )
}
}
 
export default Content;