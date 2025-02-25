import './Home.css'


export default function Home() {
    return (
        <div>
            <div id="hero">
                <div id="words">
                    <h1>LifeTracker</h1>
                    <p>Helping you take back control of your world.</p>
                </div>
                <div>
                    <img id="tracker" src='tracker.jpg'/>
                </div>
            </div>
            <div className="tiles">
                <div id="each">
                    <p style={{fontWeight:"bolder"}}>Fitness</p>
                    <img id="img" src='athlete.jpg'/>
                </div>
                <div id="each">
                    <p style={{fontWeight:"bolder"}}>Food</p>
                    <img id="img" src='food.jpg'/>
                </div>
                <div id="each">
                    <p style={{fontWeight:"bolder"}}>Rest</p>
                    <img id="img" src='alarm.jpg'/>
                </div>
                <div id="each">
                    <p style={{fontWeight:"bolder"}}>Planner</p>
                    <img id="img" src='calendar.jpg'/>
                </div>
            </div>
        </div>
    )
}