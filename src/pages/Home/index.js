import React from 'react';
import Header from './../../components/Header';
import Principal from './../../components/principal';
import SecaoTimer from './../../components/secaoTimer';
import SecaoFormulario from './../../components/secaoFormulario';
import Footer from './../../components/Footer';


export default function App() {
    return (
      <>
        <Header />
        <main>
          <Principal />
          <SecaoTimer />
          <SecaoFormulario />
        </main>
        <Footer />
      </>
    );
}
