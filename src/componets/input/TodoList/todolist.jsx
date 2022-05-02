{ list.map((itemObj)=>{
                
    return (
    <div key ={itemObj.id}>
    <h1>{itemObj.name}</h1>

    <button onClick={()=>{deleteitemFromList( itemObj.id)}}>X</button>
    <button onClick={()=>{edititemFromList(itemObj.id)}}>edit</button>
    </div>
    )
    }
       )
  }       