import Link from 'next/link';
import Image from 'next/image';
import USER from '../data/user.json';
import AppSection from '../components/molecules/AppSection';
import AppProject from '../components/atomics/AppProject';
import AppShell from '../components/templates/AppShell';

const Home = () => (
  <div>
    <AppShell hero>
      <AppSection title="What can i do">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
          {USER.services.map((item) => (
            <div
              key={item.id}
              className="border border-light-gray rounded-lg p-6"
            >
              <div className="flex items-center">
                <Image src={item.icon} alt={item.name} width={40} height={40} />
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
      <AppSection title="Skill's & Technology">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {USER.skills.map((item) => (
            <div
              key={item.id}
              className="flex items-center py-3 px-3 border border-light-gray rounded-lg"
            >
              <Image
                src={item.icon}
                alt={item.name}
                className="w-6 md:w-8 h-6 md:h-8"
                width={30}
                height={30}
              />
              <h3 className="text-black text-xs md:text-sm font-medium ml-2  md:ml-3">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </AppSection>
      <AppSection title="Projects's i have Complated">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {USER.project.contents
            .filter((filteredItem) => filteredItem.top)
            .map((item) => (
              <AppProject key={item.id} project={item} />
            ))}
        </div>
        <div className="text-center py-7">
          <Link href="/projects" passHref>
            <a className="text-xs md:text-sm text-gray transition duration-300 hover:text-orange">
              Show all my projects <i className="fas fa-chevron-right" />
            </a>
          </Link>
        </div>
      </AppSection>
    </AppShell>
  </div>
);

export default Home;
