import { Link } from "react-router-dom";
import './welcome.css';
import dogDayCare from '../assets/dogs.jpg';

const Welcome = () => {

    return(
        <body className="welcomeBackground">
            <h2>Välkommen till Doggy Daycare!</h2>
            <div>
                <img src={dogDayCare}/>
            </div>
            <Link to='/catalogue'>
                <button>Visa registrerade hundar</button>
            </Link>
        </body>
    );
}

export default Welcome;