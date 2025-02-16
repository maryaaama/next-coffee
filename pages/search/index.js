import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Result from '@/components/templates/search/Result'
import React from 'react'

function Search({data}) {
  return (
    <div>
      <PageHeader route="search"/>
      <Result searchResult={data}/>
    </div>
  )
}

export async function getServerSideProps(context){

  const {query}=context;

  const res= await fetch('http://localhost:5000/menu');
  if (!res.ok) throw new Error('Failed to fetch services');
  const data = await res.json();

  const searchResult=data.filter((item)=>(item.type.toLowerCase().includes(query.q.toLowerCase())||item.title.toLowerCase().includes(query.q.toLowerCase())));
  console.log("searchResult",searchResult)

  return {
      props: {
          data:searchResult,
      },
     
    };
}
export default Search