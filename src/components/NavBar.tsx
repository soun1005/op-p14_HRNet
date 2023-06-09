import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  link: string;
  page: string;
}

const NavBar: React.FC<NavBarProps> = ({ page, link }) => {
  return (
    <div className="mb-2 flex h-36 w-full items-center justify-between px-2.5">
      <NavLink to={'/'}>
        <img src={Logo} alt="logo" />
      </NavLink>

      <div className="flex flex-grow items-center justify-center text-3xl">
        HRnet
      </div>
      <NavLink to={link}>{page}</NavLink>
    </div>
  );
};

export default NavBar;
