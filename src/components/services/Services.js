import React, { useState } from 'react';
import '../../App.css';
import Service from "./Service";


const Services = () => {
    const [selectedService, setSelectedService] = useState('landing');

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    return (
        <div>
            <h1 className="despre-text-span">Services</h1>
            <div className="services__screen-top">
                <div className="services__screen-top__btns">
                    <span
                        onClick={() => handleServiceClick('landing')}
                        id="landing"
                        className={"services__screen-top__btn item scrolled"}
                        style={{ transitionDelay: '0s' }}>
                        Landing page
                    </span>
                    <span
                        onClick={() => handleServiceClick('corporat')}
                        id="corporat"
                        className="services__screen-top__btn item scrolled"
                        style={{ transitionDelay: '0s' }}>
                        Багатосторінковий сайт
                </span>
                    <span
                        onClick={() => handleServiceClick('shop')}
                        id="shop" className="services__screen-top__btn item scrolled"
                        style={{ transitionDelay: '0s' }}>
                        Інтернет магазин
                </span>
                    <span
                        onClick={() => handleServiceClick('audit')}
                        id="audit" className="services__screen-top__btn item scrolled"
                        style={{ transitionDelay: '0s' }}>
                        Аудит сайту
                </span>
                    <span
                        onClick={() => handleServiceClick('consultation')}
                        id="consultation" className="services__screen-top__btn item scrolled"
                        style={{ transitionDelay: '0s' }}>
                        Індивідуальна консультація
                </span>
                </div>
            </div>
            <Service selectedService={selectedService}/>
        </div>
    );
};

export default Services;
