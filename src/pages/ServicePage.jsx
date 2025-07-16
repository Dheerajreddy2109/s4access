import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ServicePage = ({ title }) => (
  <>
    <Header />
    <section style={{ padding: '100px 0 60px 0', minHeight: '60vh' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <h1 className="big-heading-text-black">{title}</h1>
        <p className="text-black" style={{ marginTop: 32 }}>
          This is the {title} page. Add your content here.
        </p>
      </div>
    </section>
    <Footer />
  </>
);

export default ServicePage;
