import React, { useState }from 'react'
import './Style.css';

const  Employee =() => {

const[name, setName] = useState("");
const[department, setDepartment] = useState("");
const[rating, setRating] = useState("");
const[data, setData] = useState([]);
const[isToggle, setisToggle] = useState(true);

const handleSubmit = (details) => {
    details.preventDefault();

    const info = {name, department, rating}

    if(name && department && rating){
        setData((total) => [...total, info])
        setName("")
        setDepartment("")
        setRating("")
        setisToggle(false)
    }
}

    return (
        <div>
            {isToggle ?  
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
                <form>
                    <label>Name :</label>
                    <input type="text" name='name' value={name} onChange={(details) => setName(details.target.value)}></input><br/>

                    <label>Department :</label>
                    <input type="text" name='department' value={department} onChange={(details) => setDepartment(details.target.value)}></input><br/>

                    <label>Rating :</label>
                    <input type="number" name='rating' value={rating} onChange={(details) => setRating(details.target.value)}></input><br/>

                    <input type="submit" className="submit" onClick={handleSubmit}></input>
                 </form>
                 </>: 
                 <>
                   <h1>EMPLOYEE FEEDBACK DATA</h1>
                 <div className='box'>
                { data.map((value)=>{
                    return(
                        <div className='child-box' key={value.id}>Name: {value.name} | Department: {value.department} | Rating: {value.rating}</div>
                    )
                })}
            </div>
            <button onClick={()=> setisToggle(true)}>Back</button>

                 </> 
                  }
        </div>
    )
}
export default Employee;