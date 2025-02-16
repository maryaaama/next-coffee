import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Pricing from '@/components/templates/Menu/Pricing'
import React from 'react'

function Menu({menu}) {
  return (
    <>
    <PageHeader route="Menu"/>
    <Pricing data={menu}/>
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:5000/menu');
    const data = await res.json();
    
    return {
      props: {
          menu:data,
      },
      
    };
  }  catch (error) {
    console.error('Error fetching menu:', error);
    return {
      props: {
          menu: [], 
      },
    };
  }
}
export default Menu;