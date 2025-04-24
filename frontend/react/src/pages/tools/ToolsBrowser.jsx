import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ToolItem from "../../components/tools/ToolItem";

export default function ToolsBrowser() {
    return (
        <>
        <Navbar></Navbar>
        <main className="flex flex-1 flex-col items-center">
            <h1 className="text-secondary text-8xl">Tools</h1>
            <div className="flex gap-8 mt-4">
               <ToolItem text="Graphs" url="/tools/graphs" imageUrl="https://www.omlet.us/images/cache/512/384/British-shorthair-silver-tabby-lying-against-dark-background.jpg"/>
            </div>
        </main>
        <Footer></Footer>
        </>
    );
}