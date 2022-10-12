import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


const URL = 'http://localhost:3001'

function App() {
  const [details, setDetails] = useState([])
  //State variable for reading values
  const [detail, setDetail] = useState('')



//function for insert
function save(){
  // const json = JSON.stringify({fname: detail}{lname:detail})
  const json = JSON.stringify({fname: detail})
  axios.post(URL + 'new', json,{
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  .then((response) => {
    //Convert stringifyed JSON object back to Javascript object.
    const addedObject = JSON.parse(json)
    //Add id returned by the server to object.
    addedObject.id = response.data.id
    //Update state variable with newly added data.
    setDetail(details => [...details, addedObject])
    //Detail state variable is emptied so user can start adding another task without deletion of previous info on the form
    setDetail('')
  }).catch(error => {
    alert(error.response.data.error)
  })
}



//Function for Deletion
function remove(id){
  axios.delete('${URL}delete/${id}')
  .then(()=>{
    const newListWithoutRemoved = details.filter((item) => item.id !== id)
    setDetails(newListWithoutRemoved)
  }).catch(error =>{
    alert(error.response.data.error)
  })

}


  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setDetails(response.data)
      }).catch(error => {
        alert(error.response.data.error)
      })
  }, [])

  return (
    <div style={{ margin: '20px' }}>
      <h2>Teacher's List</h2>

      {/* UI form for insertion */}
      <form>
        <label>Add New </label> 
        <input value ={detail} onChange = {e => setDetails(e.target.value)}></input>
        <button type = 'button' onClick={save}> Save </button>
      </form>

      <ol>
        {/* adding HyperLink in each line for deletion of that line */}
        {details.map(detail => (
          <li key={detail.id}>{detail.fname} {detail.lname} <a href = "#" onClick={() => remove(detail.id)}> Delete </a></li>
        ))}
      </ol>
    </div>
  );
}

export default App;
