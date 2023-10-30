import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h2 className='footer-title'>Blogr por Matsuo</h2>
            <div className="footer-content">
                <ul className="footer-list">
                    <li><a className='linkedin footer-list-item' rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/marcos-m-matsuo-b782a7264/">Linked<i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a className='github footer-list-item' rel='noreferrer' target='_blank' href="https://github.com/MarcMatsuo"><i className="fa-brands fa-github"></i> Github</a></li>
                    <li><a className='portfolio footer-list-item' rel='noreferrer' target='_blank' href="https://portfolio-react-five-inky.vercel.app/"><i className="fa-brands fa-react"></i> Portfolio </a></li>
                </ul>
            </div>
            <span>Obrigado pela visita!</span>
        </div>
    );
}
 
export default Footer;