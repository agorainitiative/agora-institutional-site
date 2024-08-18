import { Link, Head } from '@inertiajs/react';
import '../../css/app.css';
import Footer from './Footer';
import HeaderPage from './HeaderPage';
import SectionArticleList from './SectionArticleList';

export default function Welcome({ auth, articles }) {

    return (
        <>
            <Head title="Agorà Initiative" />
                <HeaderPage 
                    title="Mental health" 
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam rem expedita minima quod pariatur corrupti in a sequi enim at vero delectus illum consequatur aliquid tempore aperiam doloribus, id eligendi dolorem, inventore officia ullam. Asperiores repellat ex cumque laudantium voluptatem accusamus amet, maiores numquam harum iure nisi, atque eveniet! Reprehenderit."
                />
            <div style={{ padding: "0 200px" }} className="text-black">
                <main className="mt-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ante eget odio suscipit, ac fermentum nisi tincidunt. Proin nec ultrices odio, a sollicitudin elit. Suspendisse eget mi eros. Aliquam erat volutpat. Morbi ullamcorper justo ut luctus fermentum. Nullam consectetur orci ac sapien euismod, sit amet mollis ligula sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus commodo, mi nec vestibulum tincidunt, arcu risus hendrerit turpis, nec placerat purus magna id enim. Quisque pellentesque massa fermentum, convallis arcu a, ultrices nulla. Duis vel dolor vitae dolor efficitur vestibulum id a leo. Fusce facilisis magna et odio fermentum, non consectetur nisi mollis.

                    Ut eleifend, tortor sed cursus auctor, mauris ipsum pharetra purus, at maximus ex metus quis odio. Phasellus non efficitur nunc. Cras vel metus id mauris dapibus aliquam quis sed leo. Aliquam erat volutpat. Praesent et arcu magna. Nam tincidunt, tortor nec commodo facilisis, magna quam ultricies dolor, et imperdiet ipsum augue at dolor. Sed iaculis, massa eget imperdiet ultrices, metus est interdum massa, quis blandit odio sem vitae dui. Sed vitae accumsan magna. Donec non nulla ac massa luctus varius. Praesent ut risus et nibh sollicitudin sollicitudin a nec purus. Nulla facilisi. Nullam vel semper eros. Aliquam interdum, massa vel vestibulum auctor, quam dolor hendrerit justo, id eleifend massa est non massa.

                    Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vitae varius dolor. Integer eu tincidunt nisl. Nam consequat, enim sed dapibus ullamcorper, libero arcu fermentum massa, auctor auctor dolor risus at neque. Maecenas accumsan convallis magna, ac malesuada dolor cursus quis. Nullam aliquam eros nec mi gravida, sit amet tincidunt est viverra. Pellentesque ac massa felis. Proin id nulla sapien. Etiam aliquam dapibus nulla, non lacinia mi sodales ut. Proin non neque lacinia, placerat libero a, varius neque. Morbi vitae lacinia elit, sed sodales enim. Phasellus malesuada faucibus orci, eu viverra mauris tempus at. Maecenas ac nibh libero. Nulla ac arcu a nisi cursus elementum sit amet nec dolor. Proin sed lacus nisl.

                    Duis nulla ante, auctor at vestibulum a, varius non tellus. Vivamus consequat, dui quis auctor malesuada, dui massa tempor magna, quis auctor magna metus eget dolor. Aliquam sed massa quam. Sed at magna fermentum, interdum eros vel, hendrerit nisl. In in tortor nec orci dignissim tincidunt. Sed faucibus sollicitudin sapien, non fermentum velit cursus vitae. Pellentesque dignissim erat non elit consequat consectetur. Proin ornare sodales nunc, in ultrices nisl ullamcorper eget. Morbi auctor, nulla ut aliquet pharetra, est augue malesuada nunc, eu faucibus mi eros in nunc. Integer hendrerit sollicitudin lacus vel sollicitudin. Pellentesque et nunc a enim pellentesque condimentum nec vel est. Mauris vitae aliquam velit. Phasellus vulputate nunc quam, quis commodo dolor vehicula id. Fusce lacinia nunc eget velit facilisis, non molestie nisl fermentum.

                    Vestibulum a justo venenatis, posuere velit id, efficitur felis. Proin posuere, libero a auctor sollicitudin, ligula erat aliquet nisi, at gravida ante sapien non est. Sed auctor, nisl a ultrices ullamcorper, lorem dolor laoreet elit, ac tristique lorem lacus in risus. Nulla fermentum massa tortor, a suscipit nisi fermentum a. Cras aliquet convallis nunc eget tempus. Nulla et ligula id nisi gravida dapibus. Proin vel sagittis purus. Suspendisse potenti. Nam sagittis, tortor quis eleifend elementum, nunc mauris ullamcorper lectus, auctor semper magna dolor eget felis.</p>
                </main>
                <div style={{marginTop:"50px"}}>
                    <SectionArticleList articles={articles} />
                </div>
            </div>
            
            <div style={{marginTop:"150px"}}>
                <Footer />
            </div>
        </>
    );
}