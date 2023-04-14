import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import './catalogue.css';
import LeftArrow from "../assets/leftarrow.png";


const CatalogueItem = (props) => {

    const [content, setContent] = useState(null);

    const [dogList, setDogList] = useState([]);
    const [dog, setDog] = useState(null);
    const [dogIndex, setDogIndex] = useState(null);

    const params = useParams();
    const [present, setPresent] = useState('Nej');
    const [presentBool, setPresentBool] = useState(false);


    useEffect(() => {
        if ('currentdog' in params) {
            if (props.dogList != null && props.dogList != undefined) {
                if (params.currentdog >= 0 && params.currentdog < props.dogList.length) {
                    setDogIndex(parseInt(params.currentdog));
                    setDog(props.dogList[dogIndex]);
                }
            }
            else {
                getDogList();
            }
        }
    }, [])

    useEffect(() => {
        if (presentBool) {
            setPresent('Ja');
        }
        else if (!presentBool) {
            setPresent('Nej');
        }
    }, [presentBool])


    const getDogList = async () => {
        const url = 'https://api.jsonbin.io/v3/b/642e81bfebd26539d0a58dde'
        const response = await fetch(url);
        const data = await response.json();

        setDogList(data.record);
        props.setDogList(data.record);
    }

    useEffect(() => {
        if (params.currentdog >= 0 && params.currentdog < dogList.length) {

            setDogIndex(parseInt(params.currentdog));
            setDog(dogList[dogIndex]);

        }
    }, [dogList])

    useEffect(() => {
        if (dog != null) {
            setPresentBool(dog.present);
            setContent(
                <section className="itemContainer">
                    <Link to={'/catalogue'}>
                        <div className="navigationContainer">
                            <img src={LeftArrow} className="backNavigationArrow" />
                            <h2>Tillbaka</h2>
                        </div>
                    </Link>
                    <div className="infoBackground">
                        <div className="infoImg">
                            <img src={dog.img} />
                        </div>
                        
                        <section className="info">
                            <section className="dogInfo">
                                <h2>{dog.name}</h2>
                                <p>Kön: {dog.sex}</p>
                                <p>Ras: {dog.breed}</p>
                                <p>Ålder: {dog.age}</p>
                                <p>Chipnummer: {dog.chipNumber}</p>
                                <div>
                                    <h4>Närvarande: {present}</h4>
                                </div>
                            </section>
                            <section className="ownerInfo">
                                <h3>Ägare</h3>
                                <p>Namn: {dog.owner.name} {dog.owner.lastName}</p>
                                <p>Telefonnummer: {dog.owner.phoneNumber}</p>
                            </section>
                        </section>

                    </div>
                </section>
            )
        }
    }, [dog, present])



    return (
        <div>
            {content}
        </div>
    )
}

export default CatalogueItem