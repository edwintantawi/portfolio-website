import USER from '../data/user.json';
import AppHead from '../components/AppHead';
import AppNav from '../components/AppNav';
import AppDecoration from '../components/AppDecoration';
import AppSide from '../components/AppSide';
import AppContainer from '../components/AppContainer';
import AppHeader from '../components/AppHeader';
import AppSection from '../components/AppSection';
import AppTimeline from '../components/AppTimeline';
import AppCtaSection from '../components/AppCtaSection';
import AppFooter from '../components/AppFooter';

const Resume = () => {
  return (
    <div>
      <AppHead />
      <AppNav />
      <AppDecoration />
      <AppSide />
      <AppContainer>
        <AppHeader
          title={USER.resume.title}
          description={USER.resume.description}
        />
        {USER.resume.contents.map((item) => (
          <AppSection key={item.id} title={item.title}>
            {item.contents.map((subItem) => (
              <AppTimeline
                timeline={subItem.timestamp}
                title={subItem.name}
                subTitle={subItem.info}
              >
                {subItem.description}
              </AppTimeline>
            ))}
          </AppSection>
        ))}
        <AppCtaSection />
        <AppFooter />
      </AppContainer>
    </div>
  );
};

export default Resume;
