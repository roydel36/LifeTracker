import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="Navbar">
    <div className="box head">
    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf" style={{ width: '70px', height: '70px' ,}} />
        <li>Activity</li>
        <li>Exercise</li>
        <li>Nutrition</li>
        <li>Sleep</li>
    </div>
    </nav>
  )
}