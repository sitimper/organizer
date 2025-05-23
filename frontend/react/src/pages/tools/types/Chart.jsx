import ChartBase from "../../../components/tools/charts/ChartBase";
import ModalDatasets from "../../../components/tools/charts/modal/ModalDatasets";

export default function Chart({ tool }) {
    return (
        <>
            <h1 className="text-4xl">{tool.title}</h1>
            <div className="text-xl">ID: {tool.id}</div>
            <div className="text-xl">Type: {tool.type}</div>
            <div className="text-xl">Description: {tool.description}</div>
            <div className="text-xl">Date created: {tool.date_created}</div>
            <ChartBase tool={tool}></ChartBase>
            <div className="mt-4">
                
                <ModalDatasets />
            </div>
        </>
    );
}