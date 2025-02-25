import Navbar from '../../Navbar/Navbar'
import './Sleep.css'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

export default function Sleep() {
    const [form, setForm] = useState(false);
    const btnclass = form ? 'hidden' : '';
    const fClass = form ? '' : 'hidden';
    const [name, setName] = useState('');
    const [starttime, setstarttime] = useState('');
    const [endtime, setendtime] = useState('');
    const [sleep, setSleep] = useState([]);
    const [fetching, setIsFetching] = useState(false);
    const [err, setError] = useState('');

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const authUser = async () => {
          setIsFetching(true);
          console.log(endtime - starttime)
    
          try {
            const res = await axios.get("http://localhost:3001/sleep/user/" + userId);
            if (res?.data) {
              setSleep(res.data.sleep)
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
            const response = await axios.post('http://localhost:3001/sleep', {
                userId: localStorage.getItem('userId'),
                name: name,
                startTime: starttime,
                endTime: endtime
            })

            const log = await axios.post('http://localhost:3001/activity/hours', {
                userId: localStorage.getItem('userId'),
                avgHours: Math.abs(endtime - starttime)
            })

            
            
            const newSleep = [...sleep, response.data.sleep]
            setSleep(newSleep)
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
                <p>Sleep</p>
            </div>
            <div id="btn" className={btnclass}>
                <button onClick={() => {setForm(true)}} style={{backgroundColor:"blue", color:"white", width:"300px", fontSize:"30px"}}>Record Sleep</button>
            </div>
            <br/>
            <br/>
            <div className={fClass}>
            <div id="actual1">
                    <form onSubmit={handleSubmit}>
                        <div>
                        <input id="input" size={65} value={name} type='text' placeholder='Name' onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                        <br/>
                        <label>Start Time</label>
                        <br></br>
                        <div>
                        <input id="input" size={65} value={starttime} type='time' placeholder='Start Time' onChange={(e) => {setstarttime(e.target.value)}} />
                        </div>
                        <br/>
                        <label>End Time</label>
                        <br></br>
                        <div>
                        <input id="input" size={65} value={endtime} type='time' placeholder='End Time' onChange={(e) => {setendtime(e.target.value)}} />
                        </div>
                        <br/>
                        <br/>
                        <button id="login" type="submit" style={{width:"465px"}}>Record Sleep</button>
                    </form>
                    
                </div>
                </div>
                
        </div>
        <div id="cards">
        {sleep.map((n, idx) => (
                        <div id="card" key={idx}>
                        <SleepCard name={n.name} endtime={n.endtime} starttime={n.starttime} date={n.createdat}/>
                        </div>
                    ))}
        </div>
        </div>
    )
}

export function SleepCard({name, starttime, endtime, date}) {
    const index = date.indexOf('T');
    const newDate = date.substring(0, index);
    return (
        <div>
            <p>Name: {name}</p>
            <p>Start Time: {starttime}</p>
            <p>End Time: {endtime}</p>
            <p>Date: {newDate}</p>
        </div>
    )
}