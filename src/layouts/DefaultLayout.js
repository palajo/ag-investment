import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function DefaultLayout({ children, data }) {
  return (
    <>
      <Header data={data} />
      <main>
        {children}
      </main>
      <Footer data={data}/>
    </>
  );
}

export default DefaultLayout;