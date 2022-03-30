import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import USER from '../../data/user.json';
import AppToggle from '../atomics/AppToggle';

const AppNav = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [isActiveToggler, setIsActiveToggler] = useState(false);
  const { pathname } = useRouter();

  const activeLink = (url) => {
    const className =
      url === pathname
        ? 'font-bold text-white hover:text-white lg:hover:text-primary lg:text-primary bg-primary '
        : 'bg-light-gray bg-opacity-30 hover:text-primary';
    return className;
  };

  const handleWindowScroll = () => {
    const pageScrollPosition = window.pageYOffset;
    const targetPosition = 20;
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
      className={`flex items-center justify-between fixed top-0 z-40 w-full max-w-[1905px] transform right-1/2 translate-x-1/2 md:px-10 2xl:px-20 md:py-3 transition duration-500 ${
        isActiveNav && 'bg-white'
      }`}
    >
      <div
        className={`flex items-center justify-between w-full z-50 transition duration-500 ${
          isActiveToggler && 'bg-white'
        } ${isActiveNav && 'bg-white'} px-3 md:px-0 py-3 md:py-0`}
      >
        <Link href="/" passHref>
          <a className="flex items-center">
            <Image
              src="/edwintantawi.svg"
              alt="Edwin Tantawi"
              width={40}
              height={40}
            />
          </a>
        </Link>

        <AppToggle onClick={handleToggler} active={isActiveToggler} />
      </div>

      <ul
        className={`flex transform transition duration-500 absolute lg:static 
         bg-white lg:bg-transparent left-3 right-3 border lg:border-none border-light-gray p-8 lg:p-0 space-y-4 lg:space-y-0 flex-col lg:flex-row space-x-0 lg:space-x-14 rounded-xl z-10
        ${
          isActiveToggler
            ? 'translate-y-[250px]'
            : 'translate-y-[-100vh] lg:translate-y-0'
        }`}
      >
        {USER.navigations.map((item) => (
          <li key={item.id}>
            <Link href={item.url} passHref>
              <a
                className={`text-sm text-center transition block py-3 lg:py-0 rounded-lg lg:bg-transparent tracking-widest ${activeLink(
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
        onClick={handleToggler}
        aria-hidden="true"
        className={`fixed h-screen top-16 bottom-0 left-0 right-0 transition duration-500 invisible bg-black bg-opacity-80 ${
          isActiveToggler && 'visible'
        }`}
      />
    </nav>
  );
};

export default AppNav;
