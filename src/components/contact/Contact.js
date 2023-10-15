import React, { useState } from 'react';
import "./contact.css"
const Contact = () => {
    const [name, setName] = useState('');
    const [contactMethod, setContactMethod] = useState('email');
    const [email, setEmail] = useState('');
    const [telegram, setTelegram] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [viber, setViber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Отримання обраних даних та обробка їх (наприклад, відправка на сервер)

        console.log('Імʼя:', name);
        console.log('Спосіб звʼязку:', contactMethod);
        console.log('E-mail:', email);
        console.log('Telegram:', telegram);
        console.log('WhatsApp:', whatsapp);
        console.log('Viber:', viber);
        console.log('Повідомлення:', message);

        // Скидання полів форми
        setName('');
        setContactMethod('email');
        setEmail('');
        setTelegram('');
        setWhatsapp('');
        setViber('');
        setMessage('');
    };

    return (
        <div className="contact-us">
            <h2>Зв'яжіться з нами</h2>
            <div className="contact-info">
                <p>Контакти:</p>
                <ul>
                    <li>E-mail: team@vnv.solutions</li>
                    <li>Telegram: @vnv_solutions</li>
                    <li>WhatsApp: +1234567890</li>
                    <li>Viber: +9876543210</li>
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Ім'я:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Спосіб зв'язку:</label>
                    <select value={contactMethod} onChange={(e) => setContactMethod(e.target.value)}>
                        <option value="email">E-mail</option>
                        <option value="telegram">Telegram</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="viber">Viber</option>
                    </select>
                </div>
                {contactMethod === 'email' && (
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                )}
                {contactMethod === 'telegram' && (
                    <div className="form-group">
                        <label>Telegram:</label>
                        <input type="text" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
                    </div>
                )}
                {contactMethod === 'whatsapp' && (
                    <div className="form-group">
                        <label>WhatsApp:</label>
                        <input type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                    </div>
                )}
                {contactMethod === 'viber' && (
                    <div className="form-group">
                        <label>Viber:</label>
                        <input type="text" value={viber} onChange={(e) => setViber(e.target.value)} />
                    </div>
                )}
                <div className="form-group">
                    <label>Повідомлення:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit">Надіслати</button>
            </form>
        </div>
    );
};

export default Contact;
