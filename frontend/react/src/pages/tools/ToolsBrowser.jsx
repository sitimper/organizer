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
               <ToolItem text="Charts" url="/tools/charts" imageUrl="https://images.ctfassets.net/pdf29us7flmy/4FaqpZFMenRQoDl0LGqFes/02c40a20ee37917f3e117b9c599f132d/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-01-Line.png"/>
            </div>
        </main>
        <Footer></Footer>
        </>
    );
}