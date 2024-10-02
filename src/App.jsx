import Note from './components/Note'
import { useState, useEffect } from 'react'
import noteService from './services/note'
import Errormsg from './components/msg'

function App() {

  const [notes, setNote] = useState([])
  const [newNote, setNewNote] = useState()
  const [showall, setShowAll] = useState(true)
  const [errormsg,setErrormsg]=useState(null)
  
  useEffect(() => {
    noteService
    .getAll()
    .then((res)=>{setNote(res)})},[])

  const addnote = (event) => {
    event.preventDefault()
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5
    }
    noteService
    .create(noteObj)
    .then((res)=>{
      setNote(notes.concat(res))
      setNewNote('')
    })
    //----------------------
  }

  const handleaddnewnote = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  const notestoshow = showall
    ?
    notes :
    notes.filter((note) => note.important === true)

  
  const toggleImpOf=id=>{
    const note=notes.find(n=>n.id===id)
    const changednote={...note,important:!note.important}
    noteService
    .update(id,changednote)
    .then((returnednote)=>{
      setNote(notes.map(note=>note.id!==id?note:returnednote))
    })
    .catch(error=>{

      setErrormsg(`The content ${note.content} already deleted`)
      setTimeout(()=>setErrormsg(null),5000)
      setNote(notes.filter(n=>n.id!==id))
    })
    }
  //------------------------

  return (
    <>
      <Errormsg message={errormsg}/>
      <h1>Notes</h1>
      <ul>
        {notestoshow.map((note, index) => 
        <Note notedata={note} key={index} toggleimpof={()=>toggleImpOf(note.id)}/>
        )}
      </ul>
      <form>
        <input value={newNote} onChange={handleaddnewnote} />
        <button type='submit' onClick={addnote}>Save</button>
      </form>
      <br />
      <button onClick={() => { setShowAll(!showall) }}>
        Show{showall ? ' Important' : ' All'}
      </button>
    </>
  )

}
export default App
