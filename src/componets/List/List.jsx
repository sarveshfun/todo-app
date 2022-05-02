

const  List = (props) => {
    //console.log(props.editItem)
    
    const newList = props.TodoList
    const  newEdit = props.editItem
     const  newDelete = props.deleteItem

    return(   
            <div>
            {newList.map((itemObj)=>{
                
            return (
            <div key ={itemObj.id}>
            <div>{itemObj.name}</div>

            <button className="delete-button"onClick={()=>newDelete( itemObj.id)}>Delete</button>
            <button className = "edit-button"onClick={()=> {newEdit(itemObj.id)}}>edit</button>
            </div>
            


            )
            }
               )
          }   
          </div>    
         


    )



 } 

export default List