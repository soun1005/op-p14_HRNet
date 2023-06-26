import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  link: string;
  page: string;
}

const NavBar: React.FC<NavBarProps> = ({ page, link }) => {
  return (
    <div className="h-35 mb-2 flex items-center justify-between px-2.5 pt-2">
      <NavLink to={'/'}>
        <img src={Logo} alt="logo" />
      </NavLink>

      <div className="flex flex-grow items-center justify-center text-3xl">
        HRnet
      </div>
      <NavLink to={link} className="ml-auto">
        {page}
      </NavLink>
    </div>
  );
};

export default NavBar;
