import DATA from '../data/user.json';
import Link from 'next/link';
import AppContainer from '../components/AppContainer';
import AppDecoration from './AppDecoration';

const AppHero = () => {
  return (
    <header className="bg-hero-pattern bg-center bg-cover">
      <AppDecoration />
      <AppContainer>
        <div className="h-screen flex flex-col justify-center pt-16 items-center text-center lg:items-start lg:text-left">
          <span className="text-xs md:text-sm text-black flex items-center">
            <span>Hi, I'm</span>
            <span className="hidden w-1/12 h-1 bg-orange ml-2 rounded-lg" />
          </span>
          <h1 className="text-5xl lg:text-8xl font-bold text-black">
            {DATA.name}
          </h1>
          <h2 className="text-xl lg:text-4xl font-bold text-orange mt-2">
            [{DATA.status}]
          </h2>
          <p className="text-xs lg:text-sm text-gray max-w-sm tracking-widest mt-2">
            {DATA.description}
          </p>
          <Link href="/contact">
            <a className="inline-block w-max p-2 border border-light-gray mt-6">
              <span className="text-xs lg:text-sm font-bold text-white inline-block py-3 px-9  bg-orange">
                GET IN TOUCH
              </span>
            </a>
          </Link>
        </div>
      </AppContainer>
    </header>
  );
};

export default AppHero;
