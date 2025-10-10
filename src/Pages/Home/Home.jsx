import React from 'react';
import Layout from '../../Components/Layouts/Layout.jsx';
import "../../Styles/HomeStyle.css"
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import Section5 from './Section5.jsx';
import Section6 from './Section6.jsx';
import Section7 from './Section7.jsx';

function Home() {
  return (
    <>
      <Layout>

        {/* home section hero banner */}
           <Section1/>

        {/* home section about */}
           <Section2/>

        {/* home section menu */}
           <Section3/>

        {/* home section shop */}
           <Section4/>
    
        {/* home section5 shop */}
           <Section5/>
           
        {/* {home section}   */}
           <Section6/>

        {/* home section  */}
           <Section7/>
           
      </Layout>
    </>
  );
}

export default Home;