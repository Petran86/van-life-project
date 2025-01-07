import React from "react";
import { useParams } from "react-router";
import { Link, NavLink, Outlet } from "react-router-dom";
import { getVan } from "../../api";

export default function HostVanDetail() {
    const { id } = useParams()
    const [hostVanDeets, setHostVanDeets] = React.useState([])
    const [Loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    // React.useEffect(() => {
    //     fetch(`/api/host/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setHostVanDeets(data.vans[0])) /* using the index cause of mishap on server */
    // }, [id])

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setHostVanDeets(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    if (Loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                {hostVanDeets ? (
                    <div className="host-van-detail">
                        <img src={hostVanDeets.imageUrl} alt={`of ${hostVanDeets.name}`} />
                        <div className="host-van-detail-info-text">
                            <i className={`van-type van-type-${hostVanDeets.type}`}>{hostVanDeets.type}</i>
                            <h3>{hostVanDeets.name}</h3>
                            <h4>${hostVanDeets.price}/day</h4>
                        </div>
                    </div>
                ) : <h2>Loading...</h2>}
                <nav className="host-van-detail-nav">
                    <NavLink to="." end style={({ isActive }) => isActive ? activeStyle : null}>Details</NavLink>
                    <NavLink to="price" style={({ isActive }) => isActive ? activeStyle : null}>Pricing</NavLink>
                    <NavLink to="photos" style={({ isActive }) => isActive ? activeStyle : null}>Photos</NavLink>
                </nav>
                <Outlet context={{ hostVanDeets }} />
            </div>
        </section>
    )
}