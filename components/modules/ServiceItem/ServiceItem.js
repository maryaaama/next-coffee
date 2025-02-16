import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

function ServiceItem({title,desc,img,icon}) {
  return (
    <div className="col-lg-6 mb-5">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <img className="img-fluid mb-3 mb-sm-0" src={img} alt=""/>
                        </div>
                        <div className="col-sm-7">
                           <div style={{display:"flex",alignItems:"center"}}>
                           <div style={{background:"#da9f5b" , 
                                    borderRadius:"100%" ,
                                    width:"40px",
                                    height:"40px",
                                    textAlign:"center",
                                    alignContent:"center",

                                }}>
                                    <FontAwesomeIcon icon={icons[icon]} style={{fontSize:"1rem" , margin:"0,auto"}}/>
                                </div>
                           <h4 style={{marginLeft:"10px"}}>{title}</h4>
                           </div>
                            <p className="m-0">{desc}</p>
                        </div>
                    </div>
                </div>
  );
}

export default ServiceItem;
