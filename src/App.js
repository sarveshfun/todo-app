
import {  useState } from 'react';
import  TextInput   from  './componets/input/input'
import List from './componets/List/List';
import './App.css';
function App() {   

  const obj ={
     name : "",
     id : ''
  }
  
 const [values, setValue]   = useState('')
 const [data , setData]   =  useState(obj)
 const [list,setList] = useState([]);
 const [state,setstate] = useState(false)
//#
  
  const onSearchange =(event)=>{ 
   setValue( event.target.value )
   
  }
     const Additem =() => {
        console.log(values)
        
        if(!values){
           alert("fill data")        
      }
       else if (values && state){
         
              const obj2 = { ...obj,...{name:values ,id:data.id}} 
              console.log(obj2)
              setData(obj2)
              const newList = list.filter((item) => {
              return item.id !== obj2.id

        })
             const array3 = newList.concat(obj2)
         
             setList(array3)
             setstate(false)
      
           
        }   

        else {
             console.log('hello from else')
             console.log(values)

              const inputData = {
              id : Math.random()*1000000000 ,
              name: values
             }
             console.log(inputData)
           
            
            setList([...list,inputData])
            setValue("")
            setstate(false)
         
             
          
        } 


      }
            

    const deleteitemFromList = (key) => {
      console.log(key)
     const  updateItem = list.filter((it)=>{return it.id !== key})

     setList(updateItem)   

   } ;
    
    const edititemFromList = (e)    => {
          const editItem = list.find((item)=>{
              return item.id === e ;
          
          })

          
          setValue(editItem.name)
          setData(editItem)
          setstate(true)
      
         }     
 return (
    <div className="App">
       <h1>TODO List</h1>     
       <TextInput onChangeHandler ={onSearchange}  value = {values}/>
        <button className ="add-button"onClick={Additem}>ADD</button>
        <List TodoList ={list}    editItem ={edititemFromList} deleteItem = {deleteitemFromList} / >
       </div>
    
  );
}

export default App;
