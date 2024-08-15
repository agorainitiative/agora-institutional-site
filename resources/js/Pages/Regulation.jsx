import { Link, Head } from '@inertiajs/react';
import '../../css/app.css';
import Footer from './Footer';
import HeaderPage from './HeaderPage';

export default function Welcome({ auth, articles }) {

    return (
        <>
            <Head title="Agorà Initiative" />
                <HeaderPage 
                    title="Regulation" 
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam rem expedita minima quod pariatur corrupti in a sequi enim at vero delectus illum consequatur aliquid tempore aperiam doloribus, id eligendi dolorem, inventore officia ullam. Asperiores repellat ex cumque laudantium voluptatem accusamus amet, maiores numquam harum iure nisi, atque eveniet! Reprehenderit."
                />
            <div style={{ padding: "0 200px" }} className="text-black">
                <main className="mt-6">

                </main>
            </div>
            <div style={{marginTop:"150px"}}>
                <Footer />
            </div>
        </>
    );
}