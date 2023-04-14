import { Link } from "react-router-dom";


const Welcome = () => {

    return(
        <body className="welcomeBackground">
            <h2>Välkommen till Doggy Daycare!</h2>
            <Link to='/catalogue'>
                <button>Visa registrerade hundar</button>
            </Link>
        </body>
    );
}

export default Welcome;