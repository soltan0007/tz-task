import React from 'react';
import dollar from "../../img/icons/dollar.svg"
import code from "../../img/icons/code-r.svg"
import layers from "../../img/icons/layers.svg"
import checkmark from "../../img/icons/checkmark-r.svg"
import idea from "../../img/icons/idea-2.svg"
import heart from "../../img/icons/heart.svg"
import '../../App.css'
const AdvantageItem = ({ iconSrc, text }) => (
    <div className="advantages__wrapp-item scrolled">
        <div className="advantages__wrapp-item-icon">
            <img src={iconSrc} height="22" width="22" loading="lazy" alt="" />
        </div>
        <p>{text}</p>
        <button className="animated-button-wrap">Замовити послуги</button>
    </div>
);

const advantagesData = [
    {
        iconSrc: `${dollar}`,
        text: 'Мої сайти – це не просто гарна картинка, а повноцінний канал продажів, який постійно приводить нових клієнтів',
    },
    {
        iconSrc: `${code}`,
        text: 'Я не використовую конструктори (Redymag, Webflow, etc.), тому що створюю тільки якісні сайти',
    },
    {
        iconSrc: `${layers}`,
        text: 'Разом із сайтом ви отримуєте готовий фундамент для просування в інтернеті завдяки SEO та аналітиці',
    },
    {
        iconSrc: `${checkmark}`,
        text: 'Ви замовляєте цілісний продукт, адже я беру на себе всі етапи роботи – від аналізу вашого бізнесу до запуску готового сайту',
    },
    {
        iconSrc: `${idea}`,
        text: 'Співпраця зі мною – це не лише стандартна розробка, а й обговорення десятків нових ідей для розвитку вашого бізнесу',
    },
    {
        iconSrc: `${heart}`,
        text: 'Для мене не буває колишніх клієнтів, тому, одного разу замовивши у мене сайт, ви назавжди отримуєте мою підтримку',
    },
];

const WhyGeneral = () => (
    <div className="advantages__wrapp">
        {advantagesData.map((item, index) => (
            <AdvantageItem key={index} iconSrc={item.iconSrc} text={item.text} />
        ))}
    </div>
);

export default WhyGeneral;
