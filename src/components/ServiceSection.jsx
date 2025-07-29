import React, { useEffect, useState, useRef } from 'react';
import SmoothLink from '../components/SmoothLink';

const services = [
	{
		title: 'S/4 Access architecture design',
		desc: 'Comprehensive design for secure and efficient SAP S/4 access architecture.',
	},
	{
		title: 'S/4 Access projects',
		desc: 'End-to-end management and execution of SAP S/4 access projects.',
	},
	{
		title: 'SAP access / security consulting',
		desc: 'Expert consulting for SAP access and security best practices.',
	},
	{
		title: 'SAP Access management service',
		desc: 'Ongoing management and optimization of SAP access controls.',
	},
	{
		title: 'SAP Authorisation concept owner service',
		desc: 'Ownership and governance of SAP authorisation concepts.',
	},
	{
		title: 'SAP Access review',
		desc: 'Thorough review and analysis of SAP access assignments.',
	},
	{
		title: 'SAP License compliance',
		desc: 'Ensure your SAP license usage is compliant and cost-effective.',
	},
	{
		title: 'SAP Authorisation concept design',
		desc: 'Design robust SAP authorisation concepts tailored to your needs.',
	},
	{
		title: 'SAP SoD / Management',
		desc: 'Segregation of Duties (SoD) analysis and management for SAP.',
	},
	{
		title: 'SAP / Emergency user automation',
		desc: 'Automate emergency user access and monitoring in SAP.',
	},
	{
		title: 'SAP GRC Access control services',
		desc: 'Implement and manage SAP GRC access control solutions.',
	},
	{
		title: 'SAP Authorisation redesign',
		desc: 'Redesign SAP authorisations for improved security and efficiency.',
	},
];

const ServiceSection = () => {
	const [activeId, setActiveId] = useState('#id-0');
	const sectionRefs = useRef([]);

	useEffect(() => {
		const observers = sectionRefs.current
			.map((ref, index) => {
				if (!ref) return null;
				const observer = new IntersectionObserver(
					([entry]) => {
						if (entry.isIntersecting) {
							setActiveId(`#id-${index}`);
						}
					},
					{ threshold: 0.5 }
				);
				observer.observe(ref);
				return observer;
			})
			.filter(Boolean);

		return () => {
			observers.forEach((observer) => observer?.disconnect());
		};
	}, []);

	return (
		<div className='our-Service-Section'>
			<div className='our-Service-Section-left-container-sticky'>
				<p className='big-heading-text-black'>Our Services</p>
				<div className='our-Service-left-container-green'>
					{services.map((service, idx) => (
						<SmoothLink
							key={idx}
							to={`#id-${idx}`}
							className={`text-black ${
								activeId === `#id-${idx}` ? 'active-link' : ''
							}`}
							style={{
								transition: 'color 0.5s',
								display: 'inline-block',
							}}
						>
							{service.title}
						</SmoothLink>
					))}
				</div>
			</div>
			<div className='our-Service-Section-right-container'>
				{services.map((service, idx) => (
					<div
						key={idx}
						ref={(el) => (sectionRefs.current[idx] = el)}
						id={`id-${idx}`}
						className='scrolling-container-our-services'
					>
						<p className='sub-big-heading-text-black'>{service.title}</p>
						<p className='text-black'>{service.desc}</p>
						<a href='/' className='main-button-blue'>
							<span>Learn More </span>
							<span>
								<i className='bi bi-arrow-up'></i>
							</span>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServiceSection;