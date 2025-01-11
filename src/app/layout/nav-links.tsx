import Link from 'next/link';

const menus = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Skillset',
    link: '#skillset',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
];

export default function NavLinks() {
  return (
    <nav>
      <ul
        className="py-2 text-sm bg-background font-normal border-gray-400 border-opacity-30 border-[1px] rounded-lg shadow w-44"
        aria-labelledby="dropdownLargeButton"
      >
        {menus.map(({ title, link }) => (
          <li key={link}>
            <Link
              href={link}
              className="block px-4 py-2 text-gray-400 hover:text-white"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
