import ProductDetails from '@/components/templates/Product/ProductDetails.js'
import PageHeader from '@/components/modules/PageHeader/PageHeader';
import Comments from '@/components/templates/Product/Comments.js'
import React from 'react'

function Product({ product , comments }) {
  return (
    <div>
      
      <ProductDetails data={product}/>
      <Comments data={comments}/>
    </div>
  )
}



export async function getStaticProps({ params }) {
  try {
    const productRes = await fetch(`http://localhost:5000/menu/${params.id}`);
    if (!productRes.ok) { throw new Error('Failed to fetch product'); }
    const productData = await productRes.json();

    const commentsRes = await fetch(`http://localhost:5000/comments`);
    if (!commentsRes.ok) {throw new Error('Failed to fetch comments'); }
    const commentsData = await commentsRes.json();

   const productComments=commentsData.filter((comment)=>comment.productId=== +params.id);

    return {
      props: { 
       product:productData,
       comments:productComments,
      }, 

      revalidate: 60*60*12, 
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { notFound: true }; // Show 404 page if fetch fails
  }
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:5000/menu'); // Fetch all products
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() }, // Ensure ID is a string
  }));

  return { paths, fallback: 'blocking' }; // Generate only available paths, load others dynamically
}

export default Product