import { Link } from "react-router-dom";


const Welcome = () => {

    return(
        <div>
            <h2>Välkommen till Doggy Daycare!</h2>
            <Link to='/catalogue'>
                <button>Visa registrerade hundar</button>
            </Link>
        </div>
    );
}

export default Welcome;