import Navbar from '../../Navbar/Navbar'
import './Nutrition.css'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

export default function Nutrition() {
    const [form, setForm] = useState(false);
    const btnclass = form ? 'hidden' : '';
    const fClass = form ? '' : 'hidden';
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [category, setCategory] = useState('');
    const [nutrition, setNutrition] = useState([]);
    const [fetching, setIsFetching] = useState(false);
    const [err, setError] = useState('');

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const authUser = async () => {
          setIsFetching(true);
          
          try {
            const res = await axios.get("http://localhost:3001/nutrition/user/" + userId);
            if (res?.data) {
              setNutrition(res.data.nutrition);
              console.log(res.data.nutrition);
            } else {
              setError("Error fetching products.");
            }
          } catch (err) {
            console.log(err);
            const message = err?.response?.data?.error?.message;
            setError(message ?? String(err));
          } finally {
            setIsFetching(false);
          }
        };
    
        authUser();
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setForm(false);
        try {
            const response = await axios.post('http://localhost:3001/nutrition', {
                "userId": localStorage.getItem('userId'),
                "name": name,
                "calories": calories,
                "category": category
            })

            const log = await axios.post('http://localhost:3001/activity/calories', {
                "userId": localStorage.getItem('userId'),
                'avgCals': calories
            })

            const newNutrition = [...nutrition, response.data.nutrition]
            setNutrition(newNutrition)
        } 
        catch(err) {
            console.log(err);
        }
    }
    return (
        <div>
        <div id="nut">
            <Navbar/>
            <div id="bg">
                <p>Nutrition</p>
            </div>
            <div id="btn" className={btnclass}>
                <button onClick={() => {setForm(true)}} style={{backgroundColor:"blue", color:"white", width:"300px", fontSize:"30px"}}>Record Nutrition</button>
            </div>
            <br/>
            <br/>
            <div className={fClass}>
            <div id="actual1">
                    <form onSubmit={handleSubmit}>
                        <div>
                        <input id="input" size={65} value={name} type='text' placeholder='Name of Food' onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                        <br/>
                        <div>
                        <input id="input" size={65} value={calories} type='number' min={0}  placeholder='Number of Calories' onChange={(e) => {setCalories(e.target.value)}} />
                        </div>
                        <br/>
                        <div>
                            <label>Category of Food:</label>
                            <br/>
                            <br/>
                        <select style={{width:"460px"}} value={category} onChange={(e) => {setCategory(e.target.value)}}>
                            <option></option>
                            <option>Fruit</option>
                            <option>Dairy</option>
                            <option>Vegetables</option>
                            <option>Grains</option>
                            <option>Protein</option>
                        </select>
                        </div>
                        <br/>
                        <button id="login" type="submit" style={{width:"465px"}}> Record Nutrition</button>
                    </form>
                    
                </div>
                </div>
                
        </div>
        <div id="cards">
        {nutrition.map((n, idx) => (
                        <div id="card" key={idx}>
                        <NutrtionCard name={n.name} calories={n.calories} category={n.category} date={n.createdat}/>
                        </div>
                    ))}
        </div>
        </div>
    )
}

export function NutrtionCard({name, calories, category, date}) {
    const index = date.indexOf('T');
    const newDate = date.substring(0, index);
    return (
        <div>
            <p>Name: {name}</p>
            <p>Calories: {calories}</p>
            <p>Category: {category}</p>
            <p>Date: {newDate}</p>
        </div>
    )
}