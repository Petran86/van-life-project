import React from "react";
import { useParams } from "react-router";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail() {
    const params = useParams()
    const [hostVanDeets, setHostVanDeets] = React.useState([])
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setHostVanDeets(data.vans[0])) /* using the index cause of mishap on server */
    }, [params.id])

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