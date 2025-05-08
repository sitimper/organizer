import api from "../../../../api";
import { useRef } from "react";
import Modal from "../../../ui/modal/Modal";
import ModalLayer from "../../../ui/modal/ModalLayer";

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
        <Modal isActive={isActive}>
            <ModalLayer  title="Create Chart" buttonText="Create Chart" buttonOnClick={handleOnClick}>
                <form 
                    ref={formRef}
                    className="w-full flex flex-col gap-2 justify-between" 
                    action={`${api.getUri()}tools/create-chart`} 
                    method="post"
                >
                    <select className="h-8 border-1 border-secondary p-1" name="type" required>
                        <option value="line">Line</option>
                    </select>
                    <input className="h-8 border-1 border-secondary indent-1" type="text" name="title" placeholder="Title" required />
                    <input className="h-8 border-1 border-secondary indent-1" type="text" name="description" placeholder="Description" />
                    <input className="h-8 border-1 border-secondary indent-1" type="text" name="thumbnail_url" placeholder="Thumbnail URL" />
                </form>
            </ModalLayer>
        </Modal>
    );
}