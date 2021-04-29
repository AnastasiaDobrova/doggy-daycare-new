import './dogs.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FetchData } from "../FetchData";


function Dogs() {
    // document.getElementById('header1').style.display = 'block';
    const [search, setSearch] = useState("");
    const { data } = FetchData("https://api.jsonbin.io/b/6087ca445210f622be3ae6a4/1");
    return (<div className="Dogs">
        <input type="search" placeholder="Search here..." onChange={event => { setSearch(event.target.value) }} />
        <main>
            {data
                .filter((dog) => {
                    if (search === "") {
                        return dog
                    }
                    else if (dog.name.toLowerCase().includes(search.toLowerCase()) || dog.owner.name.toLowerCase().includes(search.toLowerCase()) || dog.owner.lastName.toLowerCase().includes(search.toLowerCase())) {
                        return dog
                    }
                    else {
                        return null
                    }
                })
                .map((dog, key) => (
                    <Link className="DogItem" to={"/dog/" + dog.chipNumber} key={key}>
                        <img src={dog.img} alt="dog" />
                        <div>
                            <div className="DogInfo">
                                <p className="name">{dog.name}</p>
                                <img className="sex" src={dog.sex === "female" ? "/images/female.png" : "/images/male.png"} alt="sex" />
                            </div>
                            <p>({dog.owner.name} {dog.owner.lastName})</p>
                        </div>
                    </Link>
                ))
            }
        </main>
    </div>
    );
}

export default Dogs;
