import Link from 'next/link';

const menus = [
  {
    title: 'Home',
    link: '#',
  },
];

export default function NavLinks() {
  return (
    <nav>
      <ul
        className="py-2 text-sm text-gray-400 hover:text-white bg-background font-normal border-gray-400 border-opacity-30 border-[1px] rounded-lg shadow w-44"
        aria-labelledby="dropdownLargeButton"
      >
        {menus.map(({ title, link }) => (
          <li key={link}>
            <Link href={link} className="block px-4 py-2">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
