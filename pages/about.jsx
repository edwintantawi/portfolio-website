import USER from '../data/user.json';
import AppShell from '../components/AppShell';
import AppHeader from '../components/AppHeader';
import AppSection from '../components/AppSection';
import AppCtaSection from '../components/AppCtaSection';
import AppFooter from '../components/AppFooter';
import AppSignature from '../components/AppSignature';

const About = () => {
  return (
    <AppShell
      title={`Edwin Tantawi | ${USER.about.title}`}
      description={USER.about.description}
      keyword="about me, about, me, history"
    >
      <AppHeader
        title={USER.about.title}
        description={USER.about.description}
      />
      {USER.about.contents.map((item) => (
        <AppSection key={item.id} title={item.name} closed>
          <p className="text-gray text-sm md:text-base text-center max-w-2xl mx-auto">
            {item.description}
          </p>
        </AppSection>
      ))}
      <AppSignature />
      <AppCtaSection />
      <AppFooter />
    </AppShell>
  );
};

export default About;
