import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type")
    const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    React.useEffect(() => {
        async function loadVans() {
            const data = await getVans()
            setVans(data)
        }
        loadVans()
    }, [])

    const vanElements = filteredVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
                aria-label={`View details for ${van.name}, priced at ${van.price} per day`}
            >
                <img src={van.imageUrl} alt={`of ${van.name}`} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            {/* <Link to="?type=simple" className="van-type simple">Simple</Link>
                <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
                <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
                <Link to="." className="van-type clear-filters">All</Link> */}
            {/* <button onClick={() => setSearchParams({ type: "simple" })} className="van-type simple">Simple</button>
                <button onClick={() => setSearchParams({ type: "rugged" })} className="van-type rugged">Rugged</button>
                <button onClick={() => setSearchParams({ type: "luxury" })} className="van-type luxury">Luxury</button>
                <button onClick={() => setSearchParams({})} className="van-type clear-filters">All</button> */}
            <button onClick={() => handleFilterChange("type", "simple")} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
            <button onClick={() => handleFilterChange("type", "rugged")} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
            <button onClick={() => handleFilterChange("type", "luxury")} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
            {typeFilter &&
                <button onClick={() => handleFilterChange("type", null)} className="van-type clear-filters">Clear filter</button>
            }
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}