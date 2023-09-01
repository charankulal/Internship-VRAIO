import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  var [index, setIndex] = useState(0);

  function handleNextClick() {
    if(index===11)
    {
     
      setIndex(0)
    }
    else{
      setIndex(index + 1);
    }

    
  }
  function handlePreviousClick(){
    if(index===0)
    {
     
      setIndex(11)
    }
    else{
      setIndex(index - 1);
    }

  }

  let sculpture = sculptureList[index];
  return (
    <>
    <button onClick={handlePreviousClick}>
        Previous
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
