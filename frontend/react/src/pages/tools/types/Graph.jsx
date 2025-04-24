import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router";
import api from "../../../api"
import Navbar from "../../../components/common/Navbar"
import Footer from "../../../components/common/Footer";



export default function Graph({ tool }) {
    // let { toolId } = useParams();
    // const [ graph, setGraph ] = useState(null);
    // const [ notFound, setNotFound ] = useState(false);
    // const [ loading, setLoading ] = useState(true);

    // useEffect(() => {
    //     async function fetchGraph() {
    //         try {
    //             const response = await api.get(`/tools/graphs/${toolId}`);
    //             setGraph(response.data.graph);
    //         } catch (error) {
    //             if (error.response?.status === 404 || error.response?.status === 422) {
    //                 setNotFound(true);
    //             } else {
    //                 console.error("Error fetching data:", error);
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchGraph();
    // }, [toolId])

    // if (notFound) return <Navigate to="/not-found" replace />;
    // if (loading) return <div>Loading...</div>

    return (
        <>
            {/* <Navbar></Navbar> */}
            <h1 className="text-6xl">{tool.title}</h1>
            <div className="text-4xl">ID: {tool.id}</div>
            <div className="text-4xl">Type: {tool.type}</div>
            <div className="text-4xl">Description: {tool.description}</div>
            <div className="text-4xl">Date created: {tool.date_created}</div>
            {/* <Footer></Footer> */}
        </>
    );
}