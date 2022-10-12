import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


const URL = 'http://localhost:3001'

function App() {
  const [details, setDetails] = useState([])


  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setDetails(response.data)
    }).catch(error => {
      alert(error.response.data.error)
    })
  }, [])

  return (
    <div>
      <h2>Teacher's List</h2>
      <ol>
        {details.map(detail => (
          <li key = {detail.id}>{detail.fname}{detail.lname}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
