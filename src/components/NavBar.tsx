import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  link: string;
  page: string;
}

const NavBar: React.FC<NavBarProps> = ({ page, link }) => {
  return (
    <div className="container">
      <NavLink to={'/'}>
        <img src={Logo} alt="logo" />
      </NavLink>

      <div>HRnet</div>
      <NavLink to={link}>{page}</NavLink>
    </div>
  );
};

export default NavBar;
