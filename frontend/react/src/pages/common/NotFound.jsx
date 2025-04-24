import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function NotFound() {
    return (
        <>
        <Navbar></Navbar>
        <main className="flex flex-1 flex-col justify-center items-center bg-primary text-secondary">
            <h1 className="text-6xl">Page not found</h1>
        </main>
        <Footer></Footer>
        </>
    );
}