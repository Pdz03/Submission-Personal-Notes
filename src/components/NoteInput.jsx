import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          title: '',
          body: '',
          noteTitleLength: 0
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onTitleChangeEventHandler(event) {
        if (event.target.value.length <= 50) {
        this.setState(() => {
          return {
            title: event.target.value,
            noteTitleLength: event.target.value.length
          }
        });
      } else {
        alert('Batas jumlah karakter adalah 50 karakter!');
      }
      }
      
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.state.title='';
        this.state.body='';
        this.state.noteTitleLength=50;
      }

 render() {
   return (
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
      <h2>Buat Catatan</h2>
       <input className='note-input__title' type='text' placeholder='Judul' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
       <p className='note-input__title__char-limit' id='limit'>Character left: {50 - this.state.noteTitleLength}</p>
       <textarea className='note-input__body' type='text' placeholder='Isi Catatan' value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
       <button type='submit'>Tambah</button>
     </form>
   )
 }
}
 
export default NoteInput;