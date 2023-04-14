import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './catalogue.css';
import LeftArrow from "../assets/leftarrow.png";
import RightArrow from "../assets/rightarrow.png";


const Catalogue = (props) => {

    const url = 'https://api.jsonbin.io/v3/b/642e81bfebd26539d0a58dde'

    const [dogList, setDogList] = useState([]);

    const [listItems, setListItems] = useState(null);

    const [selectedDog, setSelectedDog] = useState(null);

    const [itemContent, setItemContent] = useState(null);

    useEffect(() => {
        if (props.dogList === null || props.dogList === undefined) {
            getDogList();
        }
        else {
            setDogList(props.dogList);
        }
        
    }, []);


    useEffect(() => {
        //console.log(dogList[0].name)
        if (dogList != null) {
            setListItems(dogList.map((dog, index) => 
            <li key={dog.chipNumber} onClick={()=> setSelectedDog(dog)}>
                <section className="listItem">
                    <div className="imageContainer">
                        <h3>{dog.name}</h3>
                        <img className="listImage" src={dog.img} alt={dog.name}/>
                        <h5>Ras: {dog.breed}</h5>
                        <h5>Ägare: {dog.owner.name} {dog.owner.lastName}</h5>
                        
                    </div>
                    <Link to={`/catalogue/item/${index}`}>
                        <img className="navigationArrow" src={RightArrow}/>
                    </Link>
                </section>
            </li>
            ));

            //console.log(listItems)
        }
    }, [dogList]);

    const getDogList = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setDogList(data.record);
        props.setDogList(data.record);
    }

    return (
        <div className="background">
            <div className="catalogueBackground">
                <ul className="catalogue">
                    {listItems}
                </ul>
            
            </div>
            
        </div>
    )
}

export default Catalogue;