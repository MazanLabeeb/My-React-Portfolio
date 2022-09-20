import "./testimonials.styles.scss";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";

import { Pagination } from 'swiper';
import "swiper/css/autoplay";

import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]);

const data = [
    {
        avatar: AVATAR1,
        name: "ramizberisha",
        review: "Very prompt replies and constantly updated me throughout the process. Was clear on what he could do and couldn't do."
    },
    {
        avatar: AVATAR3,
        name: "Kuljit Kaur",
        review: "Everything looks perfect so far, thank you very much !"
    },

    {
        avatar: AVATAR2,
        name: "trebuuu",
        review: "Great partner for any software project! Mazen has the skills and temperament you wish for in a developer. thanks again!"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials-container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                autoplay = {{delay:4000}}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide className="testimonial" key={index}>
                                <div className="client-avatar">
                                    <img src={avatar} alt="Client Image" />
                                </div>
                                <h5 className="client-name">{name}</h5>
                                <small className="client-review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials;