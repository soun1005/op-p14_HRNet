import styles from './navBar.module.css';
import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

// interface NavBarProps {
//   link: React.ReactElement;
// }

interface NavBarProps {
  link: string;
  page: string;
}

const NavBar: React.FC<NavBarProps> = ({ page, link }) => {
  return (
    <div className={styles.container}>
      <NavLink to={'/'} className={styles.logo}>
        <img className={styles.img} src={Logo} alt="logo" />
      </NavLink>

      <div className={styles.title}>HRnet</div>
      <NavLink to={link} className={styles.link}>
        {page}
      </NavLink>
    </div>
  );
};

export default NavBar;
