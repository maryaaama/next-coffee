import React,{useState} from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {

  const[search,setSearch]=useState("");
  const route=useRouter();

  const searchHandlerEnter=(event)=>{
    console.log(event)
    if(event.keyCode===13){
      if(search.trim()){
        route.push(`/search?q=${search}`);
      }
    }
  }

  const searchHandler=()=>{
    if(search.trim()){
      route.push(`/search?q=${search}`);
    }
  }
  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <a href="index.html" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
        </a>
        <div className="d-flex">
         <input className="form-control me-2" type="search" placeholder="Search" onKeyDown={searchHandlerEnter} value={search} onChange={event=>setSearch(event.target.value)} aria-label="Search"/>
         <button className="btn btn-outline-light" onClick={searchHandler} type="submit">Search</button>
        </div>
        <button
          type="button"
          className={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <Link href="/" className={`${styles.nav_link} ${styles.active_nav_link}`}>
               Home
            </Link>
            
            <Link href="/about" className={`${styles.nav_link}`}>
               About
            </Link>

            <Link href="/Services" className={`${styles.nav_link}`}>
              Service
            </Link>
            <Link href="/Menu" className={`${styles.nav_link}`}>
              Menu
            </Link>
            
            <div className={`${styles.dropdown}`}>
              <a
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              
              <div className={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
                <Link href="/reservation" className={`${styles.dropdown_item}`}>
                  Reservation
                </Link>
                <Link href="/testimonial" className={`${styles.dropdown_item}`}>
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" className={`${styles.nav_link}`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
