import React from 'react';
import DeleteButton from './DeleteButton';
import NoteItemBody from './NoteItemBody';
import { showFormattedDate } from '../utils';
 
function NoteItem({ title, body, createdAt, id, onDelete }) {
 return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} date={showFormattedDate(createdAt)} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default NoteItem;