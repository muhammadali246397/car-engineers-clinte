import person from '../../../images/about_us/person.jpg'
import parts from '../../../images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-20 bg-base-200">
            <div className="hero-content py-10 flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="max-w-md rounded-lg shadow-2xl" />
                    <img src={parts} className='max-w-xs border-4 border-white absolute right-5 top-1/2 rounded-lg' alt="" />
                </div>
                <div className='w-1/2'>
                    <p className="text-[#FF3811] font-bold">About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-primary bg-[#FF3811] border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;