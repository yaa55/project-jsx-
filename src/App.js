import logo from './logo.svg';
import './App.css';
import photo from  './photo.png'
export default function App() {
  return (
    <div className="App">
            <div style = {{border:"solid 1 black",maxWidth:"100vw" }} >
            <h1 className="title red">Your name here</h1>

<br/>

 <img src={photo} />

  <br/>

<img src={photo} />
               
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/99ATDwKBeOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                   
            </div>
      </div>
     
  
           
      
  );
}