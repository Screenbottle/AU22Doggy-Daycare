import { useEffect, useState } from "react";
import './catalogue.css';
import CatalogueItem from "./CatalogueItem";


const Catalogue = () => {

    const url = 'https://api.jsonbin.io/v3/b/642e81bfebd26539d0a58dde'

    const [dogList, setDogList] = useState([]);

    const [listItems, setListItems] = useState(null);

    const [selectedDog, setSelectedDog] = useState(null);

    const [itemContent, setItemContent] = useState(null);

    useEffect(() => {
        getDogList();
    }, []);

    useEffect(() => {
        setItemContent(
            <CatalogueItem dog={selectedDog}/>
        )
    }, [selectedDog]);

    useEffect(() => {
        //console.log(dogList[0].name)
        if (dogList != null) {
            setListItems(dogList.map((dog) => 
            <li key={dog.chipNumber} onClick={()=> setSelectedDog(dog)}>
                <div className="listItem">
                    <img className="listImage" src={dog.img}/>
                    <p>{dog.name}</p>
                </div>
            </li>
            ));

            //console.log(listItems)
        }
    }, [dogList]);

    const getDogList = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setDogList(data.record);
    }

    return (
        <div className="background">
            <div className="catalogueBackground">
                <ul className="catalogue">
                    {listItems}
                </ul>
            
            </div>
            <div className="itemBackground">
                {itemContent}
            </div>
        </div>
    )
}

export default Catalogue;