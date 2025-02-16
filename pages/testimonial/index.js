import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Comments from '@/components/templates/Testimonial/Comments';
import React from 'react'

function Testimonial({comments}) {
  return (
    <div>
      <PageHeader route="Testimonial"/>
      <Comments data={comments}/>
    </div>
  )
}
export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:5000/comments');
    const comments = await res.json();
    
    return {
      props: {
          comments,
      },
      
    };
  }  catch (error) {
    console.error('Error fetching comments:', error);
    return {
      props: {
        comments: [], 
      },
    };
  }
}
export default Testimonial