import React, { useContext, useEffect,useRef,useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const context = useContext(noteContext);
    let navigate = useNavigate();
  const {notes,getNotes,editNote} = context;
  useEffect(()=>{
    if(localStorage.getItem('token')){
      getNotes()
    }else{
      navigate("/login")

    }
    
  },[])
  const updateNote=(currentNote)=>{
ref.current.click();
setNote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag, id:currentNote._id})
  }
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note,setNote] = useState({ id:"",etitle:"",edescription:"",etag:""})
  const handleClick=(e)=>{
    console.log("updatednote");
  editNote(note.id, note.etitle,note.edescription,note.etag)
     refClose.current.click();

  }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <>
    <AddNote/>
 

    <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal"ref={ref} data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">title</label>
    <input type="text" className="form-control" id="etitle" value={note.etitle} name='etitle' aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription"onChange={onChange} minLength={5} required/>
  </div>

  <div className="mb-3">
    <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control" id="etag" value={note.etag} name="etag"onChange={onChange} minLength={5} required/>
  </div>
  
  
</form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"  disabled={note.etitle.length<5 || note.edescription.length<5}onClick={handleClick} className="btn btn-primary">update note</button>
      </div>
    </div>
  </div>
</div>
    <div className='row my-3'>
      <h1>Your Notes</h1>
      <div className='container'>
        {notes.length===0 && 'No notes to display'}
      </div>
      {notes.map((note)=>{
        return <NoteItem key ={note._id} updateNote={updateNote} note={note}/>;
      })}
      </div>
      </>
  )
}

export default Notes
