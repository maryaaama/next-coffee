import React from 'react'

export default function Testimonial({comment}) {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
      <img className="img-fluid" src={comment.img} alt=""/>
      <div className="ml-3">
          <h4>{comment.name}</h4>
          <i>user</i>
      </div>
     </div>
     <p className="m-0">{comment.body}</p>
  </>
  )
}
