import './welcome.css';
import {Link} from "react-router-dom";

function Welcome() {

    // document.getElementById('header1').style.display = 'none';
    return (
        <div className="Welcome" >
            <main>
                <p className="welcomeText">Welcome to the Doggy Daycare!<br /> We help you keep track of your dogs.</p>
                <Link className="Paw" to="/overview">
                    <img src={process.env.PUBLIC_URL + "/images/paw.png"} alt="paw" />
                </Link>
            </main>
        </div>
    );
}

export default Welcome;
