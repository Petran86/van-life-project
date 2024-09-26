import React from "react";
import { useOutletContext } from "react-router";

export default function HostVanPricing() {
    const { hostVanDeets } = useOutletContext()

    return (
        <h3 className="host-van-price">${hostVanDeets.price}<span>/day</span></h3>
    )
}