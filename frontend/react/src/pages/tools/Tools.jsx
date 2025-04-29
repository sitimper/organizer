import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import api from "../../api";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ToolItem from "../../components/tools/ToolItem";
import AddButton from "../../components/ui/AddButton";
import ModalCreation from "../../components/tools/charts/popup/ModalCreation";

export default function Tools({ title }) {
    const { toolType } = useParams();
    const [ tools, setTools ] = useState(null);
    const [ notFound, setNotFound ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    let listTools = null;

    useEffect(() => {
        async function fetchTools() {
            try {
                const response = await api.get(`/tools/${toolType}`);
                setTools(response.data.tools);
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
        fetchTools();
    }, [])

    if (notFound) return <Navigate to="/not-found" replace />;
    if (loading) return <div>Loading...</div>;


    listTools = tools.map(tool => 
        <ToolItem key={tool.id} text={tool.title} url={`/tools/${toolType}/${tool.id}`} imageUrl={tool.thumbnail_url}/>
    );

    return (
        <>
        <Navbar></Navbar>
        <main className="flex flex-1 flex-col items-center">
            <h1 className="text-secondary text-8xl">{title}</h1>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
               {listTools}
            </div>
            <div className="mt-4"><ModalCreation toolType={toolType} /></div>
        </main>
        <Footer></Footer>
        </>
    );
}