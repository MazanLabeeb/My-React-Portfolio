import "./testimonials.styles.scss";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVATAR1,
        name: "Asma Iftikhar",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolor quas eaque, accusantium suscipit veritatis debitis corporis natus consequatur sapiente qui, sequi ipsa odio ab praesentium officia provident tenetur fugit."
    },
    {
        avatar: AVATAR2,
        name: "Nouman Ayaz",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolor quas eaque, accusantium suscipit veritatis debitis corporis natus consequatur sapiente qui, sequi ipsa odio ab praesentium officia provident tenetur fugit."
    },
    {
        avatar: AVATAR3,
        name: "Lahrasab",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolor quas eaque, accusantium suscipit veritatis debitis corporis natus consequatur sapiente qui, sequi ipsa odio ab praesentium officia provident tenetur fugit."
    },
    {
        avatar: AVATAR4,
        name: "Adnan Akram",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolor quas eaque, accusantium suscipit veritatis debitis corporis natus consequatur sapiente qui, sequi ipsa odio ab praesentium officia provident tenetur fugit."
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials-container">
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