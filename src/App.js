import { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [search,setSearch] = useState('');
  const [answer,setAnswer]=useState([]);
  const handleSearch = (e) =>{
    e.preventDefault();
    let requestUrl = `https://restcountries.com/v3.1/name/${search}?fullText=true`;
    axios.get(requestUrl)
      .then((response)=>{
        setAnswer(response.data); 
      })
      .catch((error)=>{
      })
  }
  
  return (
    <div className="main-container">
      
      <h1 id='title-text'>Country Search Engine</h1>
     
      <div className='entry-container'>
        <form onSubmit={handleSearch}>
          <input id='entry-box' placeholder="Enter a country's name..." onChange={(e)=>setSearch(e.target.value)}/>
        </form>   
      </div>

      <div className='output-box'>
        {/*FILL*/}
        {answer && (
          answer.map((data)=>(
            <li key={1} style={{ listStyle:'none' }}>
              <img src={data.flags.svg} id='flag-image' style={{ alignSelf:'center' }} width={200} height={120} alt='flag'/>
              <p id='country-name'>{data.name.official}</p>
             
              <p id='capital-text'>{`Capital: ${data.capital[0]}`}</p>
              <p id='population-text'>{`Population: ${data.population}`}</p>
              
              
              <p id='language-text'>{`Languages: ${Object.values(data.languages).map((language)=>language)}`}</p>
              <p id='region-text'>{data.subregion? `Subregion: ${data.subregion}` : `Region: ${data.region}`}</p>
           
            </li>
          ))
        )}
        
      </div>
      
    </div>
  )
}

export default App;
