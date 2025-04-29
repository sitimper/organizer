import api from "../../../../api";
import { useRef } from "react";
import Modal from "../../../ui/Modal";

export default function ModalChartCreation({ isActive }) {
    const formRef = useRef(null);

    function handleOnClick() {
        if (formRef.current && formRef.current.checkValidity()) {
            formRef.current.submit();
        } else {
            formRef.current.reportValidity();
        }
    }

    if (!isActive) return null;

    return (
        <Modal title="Create Chart" buttonText="Create Chart" isActive={isActive} buttonOnClick={handleOnClick}>
            <form 
                ref={formRef}
                className="flex flex-col gap-2 justify-between" 
                action={`${api.getUri()}tools/create-chart`} 
                method="post"
            >
                <input className="h-8 border-1 border-secondary indent-1" type="text" name="type" placeholder="Type" required />
                <input className="h-8 border-1 border-secondary indent-1" type="text" name="title" placeholder="Title" required />
                <input className="h-8 border-1 border-secondary indent-1" type="text" name="description" placeholder="Description" />
                <input className="h-8 border-1 border-secondary indent-1" type="text" name="thumbnail_url" placeholder="Thumbnail URL" />
            </form>
        </Modal>
    );
}