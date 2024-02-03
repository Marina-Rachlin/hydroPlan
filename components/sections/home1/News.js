'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}


export default function News() {
    return (
        <>
            <section className="rtl news-section sec-pad" id="articles">
                <div className="auto-container">
                    <div className="sec-title centred mb_50">
                    <span className="sub-title">חדשות & מאמרים</span>
                    <h2>קבל עדכון נוסף עבור<br />Hydro-Plan IL</h2>
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                            <figure className="image"><Link href="/blog-details"><img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706795159/hydro-plan/kd1yifowijexe9azmlom.jpg" alt="Article 1" style={{ maxHeight: '208px'}}/></Link></figure>
                            </div>
                            <div className="lower-content">
                            <h3 style={{fontSize: '20px'}}><Link href="/blog-details">מסמך מדיניות מנהל התכנון</Link></h3>
                            {/* <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                            <figure className="image" ><Link href="/blog-details"><img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706794956/hydro-plan/m3zrfaalvkid1baas6pj.jpg" alt="Article 2" style={{ maxHeight: '208px'}} /></Link></figure>
                            </div>
                            <div className="lower-content">
                            <h3 style={{fontSize: '20px'}}><Link href="/blog-details">עקרונות הנחיות ניהול נגר רשות המים 2021</Link></h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
