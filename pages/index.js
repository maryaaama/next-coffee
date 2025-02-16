import React from 'react';
import Slider from '@/components/templates/Index/Slider';
import About from '@/components/templates/Index/About';
import Services from '@/components/templates/Index/Services';
import { revalidatePath } from 'next/cache';
import Offer from '@/components/templates/Index/Offer';
import Menu from '@/components/templates/Index/Menu';
import Reservation from '@/components/templates/Index/reservation';
import Testimonials from '@/components/templates/Index/Testimonials';


function Index({data}) {
  return (
    <div>
      <Slider/>
      <About/>
      <Services services={data.services}/>
      <Offer/>
      <Menu menu={data.menu}/>
      <Reservation/>
      <Testimonials comments={data.comments}/>
      
    </div>
  )
}

export async function getStaticProps() {
  try {
    const servicesresponse = await fetch('http://localhost:5000/services');
    if (!servicesresponse.ok) throw new Error('Failed to fetch services');
    const servicesData = await servicesresponse.json();

    const menuResponse = await fetch('http://localhost:5000/menu');
    if (!menuResponse.ok) throw new Error('Failed to fetch services');
    const menuData = await menuResponse.json();

    const tesimonialsResponse = await fetch('http://localhost:5000/comments');
    if (!tesimonialsResponse.ok) throw new Error('Failed to fetch services');
    const testimonialData = await tesimonialsResponse.json();

    return {
      props: {
        data: {
          services:servicesData,
          menu:menuData,
          comments:testimonialData
        },
      },
      revalidate: 60 * 60 * 12,
    };
  } catch (error) {
    console.error('Error fetching services:', error);
    return {
      props: {
        data: {
          services: [], 
          menu:[],
          comments:[]
        },
      },
    };
  }
}

export default Index