import Navbar from "../Navbar/Navbar"
import './ExercisePage.css'

export default function ExercisePage() {
    return(
        <div>
            <Navbar/>
            <div id="content">
                <div id="message">
                <p>In order to start viewing your data, please log in. If you do not have an account, please register for one.</p>
                </div>
            </div>
        </div>
    )
}