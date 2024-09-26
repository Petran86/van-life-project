import React from "react";
import { useOutletContext } from "react-router";

export default function HostVanPhotos() {
    const { hostVanDeets } = useOutletContext()

    return (
        <img src={hostVanDeets.imageUrl} alt={`of ${hostVanDeets.name}`} className="host-van-detail-image" />
    )
}