import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-full md:w-1/2 relative'>
                    <img src={person} className="rounded-lg shadow-2xl w-3/4" />
                    <img src={parts} className=" absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-full md:w-1/2'>
                    <p className=' text-orange-500 font-bold'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br />in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /><br />the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;