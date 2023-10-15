import React from 'react';
import Header from "./components/header/Header";
import WhyGeneral from "./components/why-us/WhyGeneral"
import './App.css'
import Main from "./components/main/Main";
import Services from "./components/services/Services";
import LeadMagnet from "./components/lead-magnet/LeadMagnet";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Faq from "./components/faq/Faq";
import Social from "./components/social/Social";


const faqData = [
    {
        question: 'Чи потрібно підписувати контракт перед роботою?',
        answer: 'Так, після обговорення плану роботи ми разом підписуємо контракт за допомогою цифрового підпису.',
    },
    {
        question: 'Як проводиться оплата?',
        answer: 'Є два варіанти оплати: повна передплата та поетапна передплата.',
    },
    {
        question: 'Чи можна повернути кошти після оплати?',
        answer: 'Як це працює: в будь-якому випадку з суми повернення утримується 5% та комісія банку. Повертаються кошти лише за ті етапи проєкту, які не були розпочаті. Вся робота, яка була виконана та оплачена, надсилається замовнику. Етапи, які були розпочаті, завжди доводяться до кінця (за бажанням замовника).',
    },
    {
        question: 'Чи можна допрацювати вже наявний сайт?',
        answer: 'Ні, лише створити сайт з нуля. Наявний сайт можна використати як приклад для дизайну, контенту та інш., проте це не передбачає зменшення вартості послуги.',
    },
    {
        question: 'Чи можна обрати тільки один етап, а не всю послугу?',
        answer: 'Ні, можливе лише замовлення повноцінної послуги.',
    },
];

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <WhyGeneral/>
            <Services/>
            <LeadMagnet/>
            <Contact/>
            <Portfolio/>
            <Faq faqData={faqData}/>
            <Social/>
        </div>
    );
}

export default App;