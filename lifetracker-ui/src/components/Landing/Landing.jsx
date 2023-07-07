import "./Landing.css"
import tracker from "./tracker.jpg"

const Landing = () => {
    return (
    <div className="Land">
    <div className="Head">
        <h1>LifeTracker</h1>
        <h2>Helping you take back control of your world.</h2>
    </div>
    <img className="lol" src={tracker} />
    </div>
    );
  };

export default Landing;