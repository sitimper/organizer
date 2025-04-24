import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import AddGraph from "./AddGraph";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";


export default function AddTool() {
    const { toolType } = useParams();
    const [ notFound, setNotFound ] = useState(false);
    let child;
    
    if (toolType == "graphs") {
        child = <AddGraph /> 
    } else {
        setNotFound(true);
    }

    if (notFound) return <Navigate to="not-found" replace />

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