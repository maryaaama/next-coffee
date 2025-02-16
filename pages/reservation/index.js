import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ReservationDetail from '@/components/templates/Reservation/ReservationDetail'
import React from 'react'

function Reservation() {

  
  return (
    <div>
      <PageHeader route="reservation"/>
      <ReservationDetail/>
    </div>
  )
}

export default Reservation