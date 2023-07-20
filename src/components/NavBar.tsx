import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
  link: string;
  page: string;
}

const NavBar: React.FC<NavBarProps> = ({ page, link }) => {
  return (
    <div className="h-35 max-phone:h-15 flex items-center justify-between px-2.5 py-6">
      <NavLink to={'/'}>
        <img src={Logo} alt="logo" className="max-phone:mt-2 max-phone:w-12" />
      </NavLink>

      <div className="mainTitle flex flex-grow items-center justify-center text-title font-bold italic max-phone:ml-7 max-phone:text-titlePhone">
        HRnet
      </div>
      <NavLink
        to={link}
        className=" ml-auto rounded underline transition duration-150 hover:bg-sub-green hover:text-white tablet:text-tablet max-phone:text-phone"
      >
        {page}
      </NavLink>
    </div>
  );
};

export default NavBar;
