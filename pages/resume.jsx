import USER from '../data/user.json';
import AppHead from '../components/AppHead';
import AppHeader from '../components/AppHeader';
import AppSection from '../components/AppSection';
import AppTimeline from '../components/AppTimeline';
import AppCtaSection from '../components/AppCtaSection';
import AppFooter from '../components/AppFooter';
import AppShell from '../components/AppShell';
import AppSignature from '../components/AppSignature';

const Resume = () => {
  return (
    <AppShell
      title={`Edwin Tantawi | ${USER.resume.title}`}
      description={USER.resume.description}
      keyword="resume, education, course, skill"
    >
      <AppHeader
        title={USER.resume.title}
        description={USER.resume.description}
      />
      {USER.resume.contents.map((item) => (
        <AppSection key={item.id} title={item.title} className="py-0">
          {item.contents.map((subItem) => (
            <AppTimeline key={subItem.id} item={subItem}>
              {subItem.description}
              {subItem.list ? (
                <ul className="mt-4">
                  {subItem.list.map((item) => (
                    <li className="list-disc list-inside mb-2">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-orange"
                        title={item.level}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
            </AppTimeline>
          ))}
        </AppSection>
      ))}
      <AppSignature />
      <AppCtaSection />
      <AppFooter />
    </AppShell>
  );
};

export default Resume;
