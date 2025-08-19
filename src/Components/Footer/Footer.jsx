import React from 'react';

const Footer = () => {
    return (
        <footer className="footer  bg-transparent border border-white/25 mt-5 rounded-t-2xl backdrop-blur-md text-white sm:footer-horizontal footer-center  p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by NextHire</p>
            </aside>
        </footer>
    );
};

export default Footer;