import api from "../../../api";

export default function AddGraph() {
    return (
        <>  
            <h1>Add Graph</h1>
            <form action={`${api.getUri()}tools/create-graph`} method="post">
                <input type="text" name="type" placeholder="type" />
                <input type="text" name="title" placeholder="title" />
                <input type="text" name="description" placeholder="description" />
                <input type="text" name="thumbnail_url" placeholder="image url" />
                <input type="submit" value="add" />
            </form>
        </>
    );
}