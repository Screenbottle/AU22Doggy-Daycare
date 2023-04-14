import { useEffect, useState } from "react"


const CatalogueItem = (props) => {

    const [content, setContent] = useState(null);

    useEffect(() => {
        if (props.dog != null) {

            const present = props.dog.present.toString();
            
            setContent(
                <div>
                    <img src={props.dog.img}/>
                    <h2>{props.dog.name}</h2>
                    <div>
                        <p>Sex: {props.dog.sex}</p>
                        <p>Breed: {props.dog.breed}</p>
                        <p>Age: {props.dog.age}</p>
                        <p>Chip number: {props.dog.chipNumber}</p>
                    </div>
                    <div>
                        <h4>Present: {present}</h4>
                    </div>
                </div>
            )
        }
    }, [props.dog])

    const updatePresence = () => {

    }
    

    return (
        <div>
            {content}
        </div>
    )
}

export default CatalogueItem