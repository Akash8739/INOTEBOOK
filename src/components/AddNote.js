import React, { useContext,useState } from 'react'
import noteContext from '../context/notes/noteContext';
const AddNote = () => {
    const context = useContext(noteContext);
  const {addNote} = context;
  const [note,setNote] = useState({title:"",description:"",tag:""})
  const handleClick=(e)=>{
    e.preventDefault();
addNote(note.title,note.description,note.tag);
setNote({title:"",description:"",tag:""})
  }
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <div className='cantainer my-3'>
      <h1>Add Notes</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">title</label>
    <input type="text" className="form-control" id="title" value={note.title}name='title' aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" id="description"value={note.description} name="description"onChange={onChange} minLength={5} required/>
  </div>

  <div className="mb-3">
    <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control"value={note.tag} id="tag" name="tag"onChange={onChange} minLength={5} required/>
  </div>
  
  <button type="submit" disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary"onClick={handleClick}>Add Note</button>
</form>
</div>
    </div>
  )
}

export default AddNote
