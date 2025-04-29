import api from "../../api";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Chart from "./types/Chart";

export default function Tool() {
    const { toolType, toolId } = useParams();
    const [ tool, setTool ] = useState(null);
    const [ notFound, setNotFound ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    let child;

    useEffect(() => {
        async function fetchTool() {
            try {
                const response = await api.get(`/tools/${toolType}/${toolId}`);
                console.log(`/tools/${toolType}/${toolId}`);
                setTool(response.data.tool);
            } catch (error) {
                if (error.response?.status === 404 || error.response?.status === 422) {
                    setNotFound(true);
                } else {
                    console.error("Error fetching data:", error);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchTool();
    }, [toolId])

    if (toolType == "charts") {
        child = <Chart tool={tool} />;
    } else {
        setNotFound(true);
    }

    if (notFound) return <Navigate to="/not-found" replace />;
    if (loading) return <div>Loading...</div>;

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