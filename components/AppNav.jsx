import USER from '../data/user.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const AppNav = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const pathname = useRouter().pathname;

  const activeLink = (url) => {
    const className = url === pathname && 'font-semibold hover:!text-black';
    return className;
  };

  const handleWindowScroll = (event) => {
    const pageScrollPosition = window.pageYOffset;
    const targetPosition = 180;
    if (pageScrollPosition >= targetPosition) {
      setIsActiveNav(true);
    } else {
      setIsActiveNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between fixed top-0 z-50 w-full max-w-[1905px] transform right-1/2 translate-x-1/2 px-3 md:px-10 2xl:px-20 py-3 transition duration-300 ${
        isActiveNav && 'bg-white'
      }`}
    >
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
