import img1 from '../../../images/banner/1.jpg'
import img2 from '../../../images/banner/2.jpg'
import img3 from '../../../images/banner/3.jpg'
import img4 from '../../../images/banner/4.jpg'

const Bannar = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute h-full flex items-center  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white w-1/2 pl-24 space-y-7 '>
                        <h2 className='font-bold text-5xl '>Affordable Price For Car Servicing</h2>
                        <p className='space-y-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-active mr-4 bg-[#FF3811]">Button</button>
                        <button className="btn btn-outline btn-warning text-white">Warning</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn bg-[#FF3811] btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute h-full flex items-center  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white w-1/2 pl-24 space-y-7 '>
                        <h2 className='font-bold text-5xl '>Affordable Price For Car Servicing</h2>
                        <p className='space-y-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-active mr-4 bg-[#FF3811]">Button</button>
                        <button className="btn btn-outline btn-warning text-white">Warning</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn bg-[#FF3811] btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute h-full flex items-center  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white w-1/2 pl-24 space-y-7 '>
                        <h2 className='font-bold text-5xl '>Affordable Price For Car Servicing</h2>
                        <p className='space-y-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-active mr-4 bg-[#FF3811]">Button</button>
                        <button className="btn btn-outline btn-warning text-white">Warning</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn bg-[#FF3811] btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute h-full flex items-center  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white w-1/2 pl-24 space-y-7 '>
                        <h2 className='font-bold text-5xl '>Affordable Price For Car Servicing</h2>
                        <p className='space-y-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-active mr-4 bg-[#FF3811]">Button</button>
                        <button className="btn btn-outline btn-warning text-white">Warning</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn bg-[#FF3811] btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Bannar;