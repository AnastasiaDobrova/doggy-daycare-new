import './dog.css';
import { useParams } from "react-router-dom";
import { FetchData } from "../FetchData";



const Dog = (props) => {
  let { chipNumber } = useParams();
    const { data } = FetchData("https://api.jsonbin.io/b/6087ca445210f622be3ae6a4/1");
    return (
        <div className="Dog">
            {data.filter((dog) => {
                if (dog.chipNumber.toLowerCase() === chipNumber.toLowerCase()) {
                    return dog
                } else {
                    return null
                }
            })
                .map((dog, key) => (
                    <div className="Container">
                    <img className="Photo" src={dog.img} alt="dog" />
                        <div className="Info">
                            <div className="MyDog">
                                <p className="Name">{dog.name}</p>
                                <img className="Sex" src={dog.sex === "female" ? "/images/female.png" : "/images/male.png"} alt="sex" />
                                <h className="Age">{dog.age} y.</h>
                            </div>
                            <p className="Breed">{dog.breed}</p>
                            <p className="Chip">Chip number: {dog.chipNumber}</p>
                            <p className="Present">{dog.present === true ? "Present now" : "Not present now"}</p>
                            <div className="Owner">
                                <p className="OwnerName">{dog.owner.name} {dog.owner.lastName}</p>
                                <div className="Phone">
                                    <a href={"tel:" + dog.owner.phoneNumber}>
                                        <img className="Call" src="/images/phone.png" alt="phone" />
                                    </a>
                                    <p className="PhoneNum">{dog.owner.phoneNumber}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Dog;
