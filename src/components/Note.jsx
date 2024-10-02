const Note = ({ notedata,toggleimpof }) => {
    const noteStyle={
        fontSize:20,
        color:'red',
        fontStyle:'italic'
    }  
    const label=notedata.important
    ?'Make Not Important'
    :'Make Important'          
    return (
        <li style={noteStyle}>
            {notedata.content}
            <button onClick={toggleimpof}>{label}</button>
        </li>
        
    )
}
export default Note