import api from "../../api";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Chart from "./types/Chart";
import useFetch from "../../hooks/useFetch";

export default function Tool() {
    const { toolType, toolId } = useParams();
    const { data, loading, error } = useFetch(`/tools/${toolType}/${toolId}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <Navigate to="/not-found" replace />;

    const tool = data.tool;

    console.log("TOOL:", tool)

    let child;
    if (toolType == "charts") {
        child = <Chart tool={tool} />;
    } 
    else {
        return <Navigate to="/not-found" replace />;
    }

    return (
        <>
        <Navbar />
        <main className="flex flex-1 flex-col items-center">
            {child}
        </main>
        <Footer />
        </>
    );

}