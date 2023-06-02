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

      <span className={styles.title}>HRnet</span>
      <NavLink to={link}>{page}</NavLink>
    </div>
  );
};

export default NavBar;
