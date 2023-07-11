import Navbar from "../Navbar/Navbar"
import "./NutritionPage.css"

export default function NutritionPage() {
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