import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


const URL = 'http://localhost:3001'

function App() {
  const [details, setDetails] = useState([])
  //State variable for reading values
  const [detail, setDetail] = useState('')

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
        <label>Add New</label>
        <input value ={detail} onChange = {e => setDetails(e.target.value)}></input>
        <button type = 'button' onClick={save}>Save</button>
      </form>

      <ol>
        {details.map(detail => (
          <li key={detail.id}>{detail.fname} {detail.lname}</li>
        ))}
      </ol>
    </div>
  );
}


export default App;
