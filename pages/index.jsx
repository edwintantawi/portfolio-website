import USER from '../data/user.json';
import Link from 'next/link';
import AppHead from '../components/AppHead';
import AppNav from '../components/AppNav';
import AppHero from '../components/AppHero';
import AppSection from '../components/AppSection';
import AppContainer from '../components/AppContainer';
import AppCtaSection from '../components/AppCtaSection';
import AppFooter from '../components/AppFooter';
import AppDecoration from '../components/AppDecoration';
import AppSide from '../components/AppSide';

const Home = () => {
  return (
    <div>
      <AppHead />
      <AppNav />
      <AppDecoration />
      <AppSide />
      <AppHero />
      <AppContainer>
        <AppSection title="WHAT CAN I DO">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
            {USER.services.map((item) => (
              <div
                key={item.id}
                className="border border-light-gray rounded-lg p-6"
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                  <h3 className="text-black text-sm lg:text-base font-semibold ml-4">
                    {item.name}
                  </h3>
                </div>
                <div className="mt-3">
                  <p className="text-xs lg:text-sm text-gray">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AppSection>
        <AppSection title="SKILLS & TECHNOLOGY">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {USER.skills.map((item) => (
              <div
                key={item.id}
                className="flex items-center py-3 px-3 border border-light-gray rounded-lg"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 md:w-8 h-6 md:h-8"
                />
                <h3 className="text-black text-xs md:text-sm font-medium ml-2  md:ml-3">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </AppSection>
        <AppSection title="PROJECTS I HAVE COMPLETED">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
            {USER.project.contents
              .filter((filteredItem) => filteredItem.top)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-light-gray rounded-lg px-4 pt-6 text-center overflow-hidden"
                >
                  <div className="mb-3">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-black text-base lg:text-xl font-semibold transition duration-300 hover:text-orange">
                        {item.name}
                      </h3>
                    </a>
                    <p className="text-gray text-xs">{item.stack}</p>
                  </div>
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto transition duration-300 transform translate-y-5 hover:translate-y-0 shadow-xl "
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center py-7">
            <Link href="/project">
              <a className="text-xs md:text-sm text-gray transition duration-300 hover:text-orange">
                Show all my projects <i className="fas fa-chevron-right" />
              </a>
            </Link>
          </div>
        </AppSection>
        <AppCtaSection />
        <AppFooter />
      </AppContainer>
    </div>
  );
};

export default Home;

//  <div
//    key={item.id}
//    className="bg-white border border-light-gray rounded-lg px-4 pt-6 text-center overflow-hidden"
//  >
//    <div className="mb-3">
//      <a href={item.url} target="_blank" rel="noopener noreferrer">
//        <h3 className="text-black text-base lg:text-xl font-semibold transition duration-300 hover:text-orange">
//          {item.name}
//        </h3>
//      </a>
//      <p className="text-gray text-xs">{item.stack}</p>
//    </div>
//    <div>
//      <img
//        src={item.image}
//        alt={item.name}
//        className="w-full h-auto transition duration-300 transform translate-y-3 hover:translate-y-0 shadow-xl "
//      />
//    </div>
//  </div>;
