import DATA from '../data/user.json';
import AppContainer from '../components/AppContainer';
import AppButton from './AppButton';

const AppHero = () => {
  return (
    <header className="bg-hero-pattern bg-center bg-cover">
      <AppContainer>
        <div className="h-screen flex flex-col justify-center pt-16 items-center text-center lg:items-start lg:text-left">
          <span className="text-xs md:text-sm text-black flex items-center">
            <span>Hi, I'm</span>
            <span className="block w-6 lg:w-11 h-1 bg-orange ml-2 rounded-lg" />
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
          <AppButton title="GET IN TOUCH" href="/contact" />
        </div>
      </AppContainer>
    </header>
  );
};

export default AppHero;
