import react from "react";

import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "./App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Card from '@mui/material/Card';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import { CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

    
  function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);

  return (
    <div>
      <IconButton onClick={() => setLike(like + 1)} color="primary" aria-label="upload picture">
  <Badge badgeContent={like} color="primary">
  👍</Badge>
  </IconButton>
  <IconButton onClick={() => setdisLike(dislike + 1)} color="primary" aria-label="upload picture">
  <Badge badgeContent={dislike} color="error">
  👎</Badge>
  </IconButton>

    </div>

  );
}


function App() {
  
  const INITIAL_MOVIES=[
    {
   name:"Interstellar",
  poster:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  rating:"8.6",
  summary:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali: The Beginning",
      poster:
        "https://st1.bollywoodlife.com/wp-content/uploads/2017/11/Bahubali-The-beginning.jpg", 
      rating: "8",
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
      },
    {
      name: "96",
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
        rating: "8.6",
      summary:
        "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart."
    },
    {
      name: "Finding Nemo",
      poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg",
   rating: "8.1",
      summary:
        "After his son gets abducted from the Great Barrier Reef and is dispatched to Sydney, Marlin, a meek clownfish, enlists the help of a forgetful fish and embarks on a journey to bring him home."
    },
];
const [movies,setMovies]=useState(INITIAL_MOVIES);
const [name,setName]=useState('');
const [poster,setPoster]=useState('');
const [rating,setRating]=useState('');
const [summary,setSummary]=useState('');

  return (
    
    

    <section>
    <div className="add-movie-form">
    <TextField  label="Name" variant="outlined"  value={name}  onChange={(event)=> setName(event.target.value) } />
    <TextField  label="Poster-url" variant="outlined"  value={poster} onChange={(event)=> setPoster(event.target.value) } />
    <TextField  label="Rating" variant="outlined" value={rating}  onChange={(event)=> setRating(event.target.value) }/>
    <TextField  label="Summary" variant="outlined" value={summary} onChange={(event)=> setSummary(event.target.value) } />

   
    <Button variant="contained"  onClick={()=>{
      console.log({name,poster,rating,summary})
      const newMovie={name,poster,rating,summary};
      setMovies([...movies,newMovie])
    }}>Add movie</Button>

    
    </div>
    <div className="movie-list">
      {movies.map((mv, index)=>(
        <Movie
        key={index}
         name={mv.name} 
           poster={mv.poster}
            rating={mv.rating}
             summary={mv.summary}
             id={index}
             setMovies={setMovies}
             movies={movies}/>
          
      ))}
        
      </div>
      </section>
      )
}

function MovieDetails({movies}){
 
  return(
    <div>

    <iframe width="642"
     height="361" src="https://www.youtube.com/watch?v=zSWdZVtXT7E"
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write;
       encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
  </div>
  )
}
function Movie({name,poster,rating,summary}){
  const [show,setShow]=useState(false);
  const styles={display:show?"block":"none"}
  return (
    <Card>
    <div className="movie-container">
     
      <img  className="movie-poster"
       src={poster}
      alt={name}></img>
      
       <div className="movie-specs" >
       <h3>{name}</h3>
       <p>{rating}</p>
       </div>


       <button onClick={()=>setShow(!show)}>Show description</button>
 <p style={styles}> {summary}</p>
 <Counter />
 <IconButton color="error"
 
 aria-label="Delete movie" ><DeleteIcon />
   </IconButton>

    </div>
    </Card>
  )
}
export default App;
