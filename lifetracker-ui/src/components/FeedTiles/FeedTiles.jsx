import "./FeedTiles.css"
import alarm from "./alarm.jpg"
import athlete from "./athlete.jpg"
import calendar from "./calendar.jpg"
import food from "./food.jpg"

const FeedTiles = () => {
    return (
    <div className="Tiles">

        <div className="idk">
        <h2 className="title">Fitness</h2>
        <img src={athlete} style={{ width: '400px', height: '400px',  objectFit:"cover", borderRadius:"20px" }}/>
        </div>

        <div className="idk">
        <h2 className="title">Food</h2>
        <img src={food} style={{ width: '400px', height: '400px',  objectFit:"cover", borderRadius:"20px"}}/>
        </div>

        <div className="idk">
        <h2 className="title">Rest</h2>
        <img src={alarm} style={{ width: '400px', height: '400px',  objectFit:"cover", borderRadius:"20px"}}/>
        </div>

        <div className="idk">
        <h2 className="title">Planner</h2>
        <img src={calendar} style={{ width: '400px', height: '400px', objectFit:"cover", borderRadius:"20px"}}/>
        </div>


    </div>
    );
  };

export default FeedTiles;