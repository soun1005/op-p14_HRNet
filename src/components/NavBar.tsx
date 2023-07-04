import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  link: string;
  page: string;
}

const NavBar: React.FC<NavBarProps> = ({ page, link }) => {
  return (
    <div className="h-35 mb-6 flex items-center justify-between px-2.5 pt-4">
      <NavLink to={'/'}>
        <img src={Logo} alt="logo" />
      </NavLink>

      <div className="flex flex-grow items-center justify-center text-4xl font-bold italic">
        HRnet
      </div>
      <NavLink
        to={link}
        className="ml-auto rounded underline transition duration-150 hover:bg-sub-green hover:text-white"
      >
        {page}
      </NavLink>
    </div>
  );
};

export default NavBar;
