const Errormsg=({message})=>{
    const msgStyle={
      fontSize:20,
      color:'red'
    }
    if(message===null)
    {
      return null
    }
    return(
      <div>
        <h1 style={msgStyle}>{message}</h1>
      </div>
    )
  }
  export default Errormsg