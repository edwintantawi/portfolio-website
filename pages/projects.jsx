import USER from '../data/user.json';
import AppHeader from '../components/AppHeader';
import AppShell from '../components/AppShell';
import AppSection from '../components/AppSection';
import AppProject from '../components/AppProject';
import AppCtaSection from '../components/AppCtaSection';
import AppFooter from '../components/AppFooter';
import AppSignature from '../components/AppSignature';

const Project = () => {
  return (
    <AppShell
      title={`Edwin Tantawi | ${USER.project.title}`}
      description={USER.project.desctiption}
      keyword="project, projects, portfolio project, web development project, skill"
    >
      <AppHeader
        title={USER.project.title}
        description={USER.project.desctiption}
      />
      <AppSection title="Personal Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {USER.project.contents.map((item) => (
            <AppProject key={item.key} project={item} />
          ))}
        </div>
      </AppSection>
      <AppSignature />
      <AppCtaSection />
      <AppFooter />
    </AppShell>
  );
};

export default Project;
