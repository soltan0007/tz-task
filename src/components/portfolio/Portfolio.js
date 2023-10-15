import React from 'react';
import './portfolio.css'
const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2>Портфоліо</h2>
            <div className="portfolio-item">
                <div className="portfolio-media">
                    {/* Додайте тут фото або відео для портфоліо */}
                    <img src="portfolio-image.jpg" alt="Приклад фото" />
                    {/* Або відео:
                    <video controls>
                        <source src="portfolio-video.mp4" type="video/mp4" />
                        Тут може бути ваш браузер, який не підтримує відео.
                    </video>
                    */}
                </div>
                <div className="portfolio-description">
                    <p>Тут ви можете додати опис вашого проекту в портфоліо. Розкажіть про ваші досягнення, цілі та результати.</p>
                </div>
                <button className="portfolio-button">Хочу вже!</button>
            </div>
        </div>
    );
};

export default Portfolio;
