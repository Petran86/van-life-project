import React from "react";
import { useParams } from "react-router";

export default function VanDetail() {
    const params = useParams()
    const [vanDeets, setVanDeets] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanDeets(data.vans))
    }, [params.id])

    return (
        <div className="van-detail-container">
            {vanDeets ? (
                <div className="van-detail">
                    <img src={vanDeets.imageUrl} alt={`of ${vanDeets.type}`} />
                    <i className={`van-type ${vanDeets.type} selected`}>{vanDeets.type}</i>
                    <h2>{vanDeets.name}</h2>
                    <p className="van-price"><span>${vanDeets.price}</span>/day</p>
                    <p>{vanDeets.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}