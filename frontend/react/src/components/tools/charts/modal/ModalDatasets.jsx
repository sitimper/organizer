import api from "../../../../api";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../../ui/modal/Modal";
import ModalLayer from "../../../ui/modal/ModalLayer";
import ModalLayerBarItem from "../../../ui/modal/ModalLayersBarItem";
import ModalCheckboxItem from "./ModalCheckboxItem";
import Button from "../../../ui/Button";
import ColorSelector from "../../../ui/ColorSelector";
import useFetch from "../../../../hooks/useFetch";


export default function ModalDatasets() {
    const [ layerId, setLayerId ] = useState(1);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ datasetsToDelete, setDatasetsToDelete ] = useState([]);
    const formRefCreate = useRef(null);
    const formRefDelete = useRef(null);
    const { toolId } = useParams();

    const { data, loading, error } = useFetch(`tools/charts/${toolId}/get-chart-datasets`);

    if (loading) return <div>Loading...</div>
    if (error) return <Navigate to="/not-found" replace />;

    const datasets = data.datasets;
    
    function handleCheckboxOnChange(event, datasetId) {
        const isChecked = event.target.checked;
        console.log(isChecked);
        if (isChecked) {
            setDatasetsToDelete([
                ...datasetsToDelete,
                datasetId
            ]);
        } else {
            setDatasetsToDelete(datasetsToDelete.filter((datasetToDeleteId) =>
                datasetToDeleteId != datasetId
            ));
        }
    }

    const datasetsList = datasets.map((dataset, index) =>
        <div className="w-full p-2 flex justify-between items-center 
        text-2xl border-1 border-secondary" key={index}>
            <div>{dataset.id}</div>
            <div>{JSON.parse(dataset.data).label}</div>
            {/* <ModalCheckboxItem /> */}
            <input className="size-5" id={`checkbox-${dataset.id}`} type="checkbox" name="datasets" value={JSON.stringify(datasetsToDelete)} onChange={() => {
                handleCheckboxOnChange(event, dataset.id);
            }} />
        </div>
    );

    function handleFormOnClick(formRef) {
        if (formRef.current && formRef.current.checkValidity()) {
            formRef.current.submit();
        } else {
            formRef.current.reportValidity();
        }
    }

    const layersItems = (
    <>
    <ModalLayerBarItem onClick={() => setLayerId(1)}>
        <svg className="size-full cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-secondary" d="M0 0H10V4H4V10H0V0Z" fill="#000000"/>
            <path className="fill-secondary" d="M16 6H6V16H16V6Z" fill="#000000"/>
        </svg>
    </ModalLayerBarItem>
    <ModalLayerBarItem onClick={() => setLayerId(2)}>
        <svg className="size-full cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-secondary" d="M0 0H10V4H4V10H0V0Z" fill="#000000"/>
            <path className="fill-secondary" d="M16 6H6V16H16V6Z" fill="#000000"/>
        </svg>
    </ModalLayerBarItem>
    </>
    )

    return (
        <>
        {isOpen && (        
            <Modal layersBarItems={layersItems} isActive={setIsOpen}>
                <ModalLayer activeId={layerId} title="Create Dataset" buttonText="Create" buttonOnClick={() => handleFormOnClick(formRefCreate)}>
                    <form 
                        ref={formRefCreate}
                        className="w-full flex flex-col gap-2 justify-between" 
                        action={`${api.getUri()}tools/charts/${toolId}/create-chart-dataset`} 
                        method="post"
                    >
                        <input className="h-8 border-1 border-secondary indent-1" type="text" name="label" placeholder="Label" required />
                        <input className="h-8 border-1 border-secondary indent-1" type="text" name="data" placeholder="Data" required />
                        <ColorSelector id="border-color-selector" name="border_color" placeholder="Border color" required/>
                        <ColorSelector id="background-color-selector" name="background_color" placeholder="Background color" required/>
                    </form>
                </ModalLayer>
                <ModalLayer id={2} activeId={layerId} title="Delete Datasets" buttonText="Delete" buttonOnClick={() => handleFormOnClick(formRefDelete)}>
                    <form 
                        ref={formRefDelete}
                        className="w-full flex flex-col gap-2 justify-between" 
                        action={`${api.getUri()}tools/charts/${toolId}/delete-chart-datasets`} 
                        method="post"
                    >
                        {datasetsList}
                    </form>
                </ModalLayer>
            </Modal>
         )}
        <Button height={24} onClick={() => setIsOpen(true)}>Datasets</Button>
        </>
    );
}