import PageHeader from '@/components/modules/PageHeader/PageHeader'
import React from 'react'
import Details from '@/components/templates/Contact/ContactDetails';

function Contact() {
  return (
    <div>
      <PageHeader route="contact"/>
      <Details/>
    </div>
  )
}

export default Contact