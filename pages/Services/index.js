import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ServicesDetails from '@/components/templates/Services/ServicesDetails'
import React from 'react'

function Services({services}) {
  
  return (
    <div>
      <PageHeader route="services"/>
      <ServicesDetails data={services}/>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:5000/services');
    const data = await res.json();
    
    return {
      props: {
          services:data,
      },
      
    };
  }  catch (error) {
    console.error('Error fetching services:', error);
    return {
      props: {
          services: [], 
      },
    };
  }
}


export default Services