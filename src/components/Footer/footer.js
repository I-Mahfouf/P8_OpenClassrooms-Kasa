import React from 'react';

import logoKasa from '../../assets/logoFooter.svg'
import styles from './footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src={logoKasa} alt='Logo de Kasa'></img>
            <h2 className={styles.footerText}>© 2020 Kasa. All rights reserved</h2>
        </footer>
    )
}

export default Footer;