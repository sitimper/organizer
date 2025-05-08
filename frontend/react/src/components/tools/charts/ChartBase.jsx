import api from "../../../api";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LineChart from "./LineChart";

export default function ChartBase({ tool }) {
    const [ datasets, setDatasets ] = useState(null);
    const [ notFound, setNotFound ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    const labels = JSON.parse(tool.labels);
    const options = JSON.parse(tool.options);

    useEffect(() => {
        async function fetchDatasets() {
            try {
                const datasetsResponse = await api.get(`/tools/charts/${tool.id}/get-chart-datasets`);
                let datasetsList = [];
                datasetsResponse.data.datasets.forEach((datasetArray) => { 
                    datasetsList.push(JSON.parse(datasetArray["data"]));
                });
                setDatasets(datasetsList);
                console.log(datasetsList)
            } catch (error) {
                if (error.datasetsResponse?.status === 404 || error.datasetsResponse?.status === 422) {
                    setNotFound(true);
                } else {
                    console.error("Error fetching data:", error);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchDatasets();
    }, []);

    let child;

    if (tool.type == "line") {
        child = <LineChart options={options} data={{"labels": labels, "datasets": datasets}} />
    } 
    else {
        return <Navigate to="/not-found" replace />;
    }

    if (notFound) return <Navigate to="/not-found" replace />;
    if (loading) return <div>Loading...</div>;

    return (
        <>
        {child}
        </>
    );
}