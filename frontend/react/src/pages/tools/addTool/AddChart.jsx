import api from "../../../api";

export default function AddChart() {
    return (
        <>  
            <h1>Add Chart</h1>
            <form className="flex flex-col" action={`${api.getUri()}tools/create-chart`} method="post">
                <input type="text" name="type" placeholder="type" />
                <input type="text" name="title" placeholder="title" />
                <input type="text" name="description" placeholder="description" />
                <input type="text" name="thumbnail_url" placeholder="image url" />
                <input type="submit" value="add" />
            </form>
        </>
    );
}