import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import LinkButton from "../../components/ui/LinkButton";

export default function Homepage() {
    return (
        <>
        <Navbar></Navbar>
        <main className="flex flex-col items-center bg-primary text-secondary">
            <section className="w-screen h-[400px] flex justify-center items-center text-8xl bg-[url(https://images.unsplash.com/photo-1518563077661-23ad56581d77?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHNlYXxlbnwwfHwwfHx8MA%3D%3D)] bg-no-repeat bg-cover bg-center">
                Organizer
            </section>
            <section className="py-8 flex flex-col items-center">
                <div className="text-6xl">About</div>
                <p className="w-full max-w-[900px] min-w-[325px] mt-2 text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, consequatur non consequuntur magni quasi rerum
                    quibusdam. A velit magni aliquid ad aut sunt error reprehenderit alias dolorum nobis? Minima nobis eligendi
                    beatae corporis excepturi perspiciatis nesciunt quae, repellat, quisquam illo cum dignissimos sequi a esse
                    est tempora vel tenetur expedita.
                </p>
            </section>
            <LinkButton className="text-4xl" href="/tools">Get started</LinkButton>
            <section className="pt-8 pb-22 flex flex-col items-center">
                <div className="text-6xl">Tools</div>
                <p className="w-full max-w-[900px] min-w-[325px] mt-2 text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, consequatur non consequuntur magni quasi rerum
                    quibusdam. A velit magni aliquid ad aut sunt error reprehenderit alias dolorum nobis? Minima nobis eligendi
                    beatae corporis excepturi perspiciatis nesciunt quae, repellat, quisquam illo cum dignissimos sequi a esse
                    est tempora vel tenetur expedita.
                </p>
            </section>
        </main>
        <Footer></Footer>
        </>
    );
}