import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          title: '',
          body: '',
          noteBodyLength: 0
        }
      
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onNameChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
      }
      
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
            noteBodyLength: event.target.value.length
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.state.title='';
        this.state.body='';
        this.state.noteBodyLength=50;
      }

 render() {
   return (
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
       <input className="note-input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.onNameChangeEventHandler} />
       <textarea className="note-input__body" type="text" placeholder="Isi Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
       <p className="note-input__title__char-limit">Character left: {50 - this.state.noteBodyLength}</p><br></br>
       <button type="submit">Tambah</button>
     </form>
   )
 }
}
 
export default NoteInput;