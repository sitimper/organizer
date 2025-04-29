import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import LinkButton from "../../components/ui/LinkButton";

export default function Homepage() {
    return (
        <>
        <Navbar></Navbar>
        <main className="flex flex-1 flex-col items-center bg-primary text-secondary">
            <section className="w-screen h-[400px] flex justify-center items-center text-8xl bg-[url(assets/backgrounds/library2.jpg)] bg-no-repeat bg-cover bg-center">
                Organizer
            </section>
            <section className="py-8 flex flex-col items-center">
                <div className="text-6xl">About</div>
                <p className="w-full max-w-[900px] min-w-[325px] mt-2 text-lg">
                    Organizer is a tool for monitoring and organizing your life!<br />

                </p>
            </section>
            <LinkButton className="text-4xl" href="/tools">Get started</LinkButton>
            <section className="pt-8 pb-22 flex flex-col items-center">
                <div className="text-6xl">Tools</div>
                <p className="w-full max-w-[900px] min-w-[325px] mt-2 text-lg">
                    It offers many useful tools for your needs
                </p>
            </section>
        </main>
        <Footer></Footer>
        </>
    );
}