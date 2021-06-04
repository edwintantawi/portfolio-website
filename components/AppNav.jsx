import Link from 'next/link';
import { useRouter } from 'next/router';
import USER from '../data/user.json';

const AppNav = () => {
  const pathname = useRouter().pathname;

  const activeLink = (url) => {
    const className = url === pathname && 'font-semibold hover:text-black';
    return className;
  };

  return (
    <nav className="flex items-center justify-between fixed top-0 w-full px-3 2xl:px-20 py-3">
      <Link href="/">
        <a className="inline-block">
          <img
            src="/edwintantawi.svg"
            alt="Edwin Tantawi"
            className="w-10 h-10  object-contain"
          />
        </a>
      </Link>

      <ul className="hidden md:flex space-x-14">
        {USER.navigations.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>
              <a
                className={`text-sm text-black hover:text-gray transition ${activeLink(
                  item.url
                )}`}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppNav;
