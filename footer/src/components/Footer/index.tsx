import Logo from '../../assets/vr-logo.png'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer} data-cy="footer">
      <div className={styles.footerWrapper}>
        <img className={styles.image} src={Logo} alt="Logo da VR" />
        <span className={styles.copywrite}>
          © 2024 VR Benefícios - Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
