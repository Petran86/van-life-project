import React from "react";
import { useOutletContext } from "react-router";

export default function HostVanInfo() {
    const { hostVanDeets } = useOutletContext()

    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{hostVanDeets.name}</span></h4>
            <h4>Category: <span>{hostVanDeets.type}</span></h4>
            <h4>Description: <span>{hostVanDeets.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}