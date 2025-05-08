import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import api from "../../api";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ToolItem from "../../components/tools/ToolItem";
import ModalToolCreation from "../../components/tools/modal/ModalToolCreation";
import useFetch from "../../hooks/useFetch";

export default function Tools({ title }) {
    const { toolType } = useParams();

    const { data, loading, error } = useFetch(`/tools/${toolType}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <Navigate to="/not-found" replace />;

    const tools = data.tools;

    const listTools = tools.map(tool => 
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
            <div className="mt-4"><ModalToolCreation type={toolType} /></div>
        </main>
        <Footer></Footer>
        </>
    );
}