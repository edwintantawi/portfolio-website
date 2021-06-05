import USER from '../data/user.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AppToggle from './AppToggle';

const AppNav = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [isActiveToggler, setIsActiveToggler] = useState(false);
  const pathname = useRouter().pathname;

  const activeLink = (url) => {
    const className =
      url === pathname
        ? 'font-semibold hover:text-white md:hover:text-black bg-orange text-white md:text-black'
        : 'bg-light-gray bg-opacity-30 hover:text-orange';
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

  const handleToggler = (event) => {
    event.preventDefault();
    setIsActiveToggler((prev) => !prev);
    event.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between fixed top-0 z-50 w-full max-w-[1905px] transform right-1/2 translate-x-1/2 md:px-10 2xl:px-20 md:py-3 transition duration-300 ${
        isActiveNav && 'bg-white'
      }`}
    >
      <div
        className={`flex items-center justify-between w-full z-50 ${
          isActiveToggler && 'bg-white'
        } px-3 md:px-0 py-3 md:py-0`}
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

        <AppToggle onClick={handleToggler} active={isActiveToggler} />
      </div>

      <ul
        className={`flex transform transition duration-500 absolute md:static 
        top-[80px] bg-white md:bg-transparent left-3 right-3 border md:border-none border-light-gray p-8 md:p-0 space-y-4 md:space-y-0 flex-col md:flex-row space-x-0 md:space-x-14 rounded-xl z-10
        ${
          isActiveToggler
            ? 'translate-y-0'
            : 'translate-y-[-100vh] md:translate-y-0'
        }`}
      >
        {USER.navigations.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>
              <a
                className={`text-sm text-center transition block py-3 md:py-0 rounded-lg md:bg-transparent  ${activeLink(
                  item.url
                )}`}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={`fixed h-screen top-16 bottom-0 left-0 right-0 backdrop-filter backdrop-blur-lg invisible transition duration-500 ${
          isActiveToggler && 'bg-black bg-opacity-50 visible'
        }`}
      />
    </nav>
  );
};

export default AppNav;
