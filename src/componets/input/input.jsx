


const TextInput = (props) =>{
    console.log("redder from text input")
   
  

    return(
        <textarea id="w3review" name="w3review" rows="4" cols="50"
        onChange={props.onChangeHandler}
        value ={props.value}>
        </textarea>



    )

    

  

}

export default TextInput ;