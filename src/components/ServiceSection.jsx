import React, { useEffect, useState, useRef } from 'react';
import SmoothLink from '../components/SmoothLink';

const ServiceSection = () => {
    const [activeId, setActiveId] = useState(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observers = sectionRefs.current.map((ref, index) => {
            if (!ref) {
                console.warn(`Ref for index ${index} is null`);
                return null;
            }
            const observer = new IntersectionObserver(
                ([entry]) => {
                    console.log(`Section ${index + 1} isIntersecting:`, entry.isIntersecting, 'id:', entry.target.id);
                    if (entry.isIntersecting) {
                        setActiveId(`#${entry.target.id}`);
                    }
                },
                { threshold: 1, rootMargin: '0px' } // 50% visible
            );
            observer.observe(ref);
            return observer;
        }).filter(observer => observer !== null);

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    return (
        <div className='our-Service-Section'>
            <div className="our-Service-Section-left-container-sticky">
                <p className="big-heading-text-black">Our Services</p>
                <div className="our-Service-left-container-green">
                    <p className="green-bg-text-heading">SAP S/4</p>
                    <SmoothLink
                        to='#id-one'
                        className={`text-black ${activeId === '#id-one' ? 'active-link' : ''}`}
                        style={{ transition: 'color 0.5s', display: 'inline-block' }}
                    >
                        S/4 access architecture design
                    </SmoothLink>
                    <SmoothLink
                        to='#id-two'
                        className={`text-black ${activeId === '#id-two' ? 'active-link' : ''}`}
                        style={{ transition: 'color 0.5s', display: 'inline-block' }}
                    >
                        S/4 access architecture design
                    </SmoothLink>
                    <p className="green-bg-text-heading">SAP S/4</p>
                    <SmoothLink
                        to='#id-three'
                        className={`text-black ${activeId === '#id-three' ? 'active-link' : ''}`}
                        style={{ transition: 'color 0.5s', display: 'inline-block' }}
                    >
                        S/4 access architecture design
                    </SmoothLink>
                    <SmoothLink
                        to='#id-four'
                        className={`text-black ${activeId === '#id-four' ? 'active-link' : ''}`}
                        style={{ transition: 'color 0.5s', display: 'inline-block' }}
                    >
                        S/4 access architecture design
                    </SmoothLink>
                    <p className="green-bg-text-heading">SAP S/4</p>
                    <SmoothLink
                        to='#id-five'
                        className={`text-black ${activeId === '#id-five' ? 'active-link' : ''}`}
                        style={{ transition: 'color 0.5s', display: 'inline-block' }}
                    >
                        S/4 access architecture design
                    </SmoothLink>
                    <SmoothLink
                        to='#id-six'
                        className={`text-black ${activeId === '#id-six' ? 'active-link' : ''}`}
                        style={{ transition: 'color 0.5s', display: 'inline-block' }}
                    >
                        S/4 access architecture design
                    </SmoothLink>
                </div>
            </div>
            <div className="our-Service-Section-right-container">
                <div ref={el => (sectionRefs.current[0] = el)} id="id-one" className='scrolling-container-our-services'>
                    <p className="sub-big-heading-text-black">S/4 access architecture design</p>
                    <p className="text-black">Transformation to SAP S/4 is a unique opportunity to modernize the SAP security design. At the same time, the complexity has never been so high. <br /><br />We have assisted several large organisations in designing their complete S/4 security roadmap. Having this right from the start is the key to ensuring a successful implementation project.</p>
                    <a href="/" className="main-button-blue"><span>Learn More </span><span><i className="bi bi-arrow-up"></i></span></a>
                </div>
                <div ref={el => (sectionRefs.current[1] = el)} id="id-two" className='scrolling-container-our-services'>
                    <p className="sub-big-heading-text-black">S/4 access architecture design</p>
                    <p className="text-black">Transformation to SAP S/4 is a unique opportunity to modernize the SAP security design. At the same time, the complexity has never been so high. <br /><br />We have assisted several large organisations in designing their complete S/4 security roadmap. Having this right from the start is the key to ensuring a successful implementation project.</p>
                    <a href="/" className="main-button-blue"><span>Learn More </span><span><i className="bi bi-arrow-up"></i></span></a>
                </div>
                <div ref={el => (sectionRefs.current[2] = el)} id="id-three" className='scrolling-container-our-services'>
                    <p className="sub-big-heading-text-black">S/4 access architecture design</p>
                    <p className="text-black">Transformation to SAP S/4 is a unique opportunity to modernize the SAP security design. At the same time, the complexity has never been so high. <br /><br />We have assisted several large organisations in designing their complete S/4 security roadmap. Having this right from the start is the key to ensuring a successful implementation project.</p>
                    <a href="/" className="main-button-blue"><span>Learn More </span><span><i className="bi bi-arrow-up"></i></span></a>
                </div>
                <div ref={el => (sectionRefs.current[3] = el)} id="id-four" className='scrolling-container-our-services'>
                    <p className="sub-big-heading-text-black">S/4 access architecture design</p>
                    <p className="text-black">Transformation to SAP S/4 is a unique opportunity to modernize the SAP security design. At the same time, the complexity has never been so high. <br /><br />We have assisted several large organisations in designing their complete S/4 security roadmap. Having this right from the start is the key to ensuring a successful implementation project.</p>
                    <a href="/" className="main-button-blue"><span>Learn More </span><span><i className="bi bi-arrow-up"></i></span></a>
                </div>
                <div ref={el => (sectionRefs.current[4] = el)} id="id-five" className='scrolling-container-our-services'>
                    <p className="sub-big-heading-text-black">S/4 access architecture design</p>
                    <p className="text-black">Transformation to SAP S/4 is a unique opportunity to modernize the SAP security design. At the same time, the complexity has never been so high. <br /><br />We have assisted several large organisations in designing their complete S/4 security roadmap. Having this right from the start is the key to ensuring a successful implementation project.</p>
                    <a href="/" className="main-button-blue"><span>Learn More </span><span><i className="bi bi-arrow-up"></i></span></a>
                </div>
                <div ref={el => (sectionRefs.current[5] = el)} id="id-six" className='scrolling-container-our-services'>
                    <p className="sub-big-heading-text-black">S/4 access architecture design</p>
                    <p className="text-black">Transformation to SAP S/4 is a unique opportunity to modernize the SAP security design. At the same time, the complexity has never been so high. <br /><br />We have assisted several large organisations in designing their complete S/4 security roadmap. Having this right from the start is the key to ensuring a successful implementation project.</p>
                    <a href="/" className="main-button-blue"><span>Learn More </span><span><i className="bi bi-arrow-up"></i></span></a>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;