import { DropdownMenu } from '../components/dropdown-menu';
import NavLinks from './nav-links';

const DropdownMenuTrigger = () => {
  return (
    <button
      data-collapse-toggle="navbar-hamburger"
      type="button"
      className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-400 hover:text-white duration-100 rounded-lg focus:outline-none "
      aria-controls="navbar-hamburger"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};

export default function Header() {
  return (
    <div
      id="marketing-banner"
      tabIndex={-1}
      className="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-background border border-gray-400 border-opacity-30 rounded-lg shadow-sm md:max-w-sm left-1/2 top-6 "
    >
      <div className="flex w-full items-center justify-center">
        <DropdownMenu dropdownTrigger={<DropdownMenuTrigger />}>
          <NavLinks />
        </DropdownMenu>
      </div>
    </div>
  );
}
