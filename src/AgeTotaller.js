import React, { useState } from "react";
import AgeCounter from "./AgeCounter"

const AgeTotaller = () => {
  const [cats, setCats] = useState([ "num", "ayo",  "shaun", "ted"]);
  const [newCat, setNewCat] = useState("")
  const [totalAge, setTotalAge] = useState(0);
  function addNewName(){
    
    if(newCat.length > 2) {
      const newCats = [...cats, newCat];
      setCats(newCats); 
      setNewCat("");

    }
  }
  function update(changeBy){
    setTotalAge(totalAge + changeBy);


  }
  return (
    <div>
      <input type="text" value={newCat} onChange={(event) => setNewCat(event.target.value)} />
      <button onClick={addNewName}>ADD NEW NAME</button>
    <div className="AgeTotaller">
      

      <div className="cats">
      
      {cats.map((cat, index)=>(
        <AgeCounter key={index} cat={cat} update={update}/>
        
      ))}
        </div>
      <h1>The total age is : {totalAge}</h1>
      </div>
      
      
    </div>
  );
};

export default AgeTotaller;
