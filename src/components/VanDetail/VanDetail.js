import React from "react";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router";
import { getVan } from "../../api";

export default function VanDetail() {
    const { id } = useParams()
    const location = useLocation()
    const [vanDeets, setVanDeets] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    // React.useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVanDeets(data.vans))
    // }, [params.id])

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVanDeets(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
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