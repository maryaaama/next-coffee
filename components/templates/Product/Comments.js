import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "@/styles/Product.module.css"
const Comments = ({data}) => {
  console.log("comments",data)
  if (!data || data.length === 0) {
    return null;
  }
  return ( 
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">Product Comments</h1>
        </div>
        <div className="row">
        <Swiper
        
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {data.slice(0,6).map((comment)=>( 
          <SwiperSlide className={styles.swiper_slide} key={comment.id}>
          <div className="testimonial-item">
            <div className="d-flex align-items-center mb-3">
              <img
                className="img-fluid"
                width={100}
                src={comment.img || "/images/menu-1.jpg"} 
                onError={(e) => (e.target.src = "/images/menu-1.jpg")}
                alt=""
              />
              <div className="ms-3">
                <h4>{comment.name}</h4>
                <p className="text-left mb-0">User</p>
              </div>
            </div>
            <p className="m-0 mb-4">
              {comment.body}
            </p>
          </div></SwiperSlide>))}
       
       
      </Swiper>
          
        </div>
      </div>
    </div>
  );
};

export default Comments;
