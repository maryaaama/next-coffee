import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

function Services({ services }) {
  if (services.length === 0) {
    return <p>No services available at the moment.</p>;
  }
  return (
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="section-title">
                <h4 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Our Services</h4>
                <h1 className="display-4">Fresh &amp; Organic Beans</h1>
            </div>
            <div className="row">
              {services.map(service =>(
                <ServiceItem
                 key={service.id}
                 title={service.title}
                 desc={service.desc}
                 img={service.img}
                 icon={service.icon}     
              />))}
              
            </div>
        </div>
    </div>
  );
}

export default Services;
