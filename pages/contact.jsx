import USER from '../data/user.json';
import AppFooter from '../components/AppFooter';
import AppShell from '../components/AppShell';
import AppSignature from '../components/AppSignature';
import AppSection from '../components/AppSection';
import AppHeader from '../components/AppHeader';

const Contact = () => {
  return (
    <AppShell
      title={`Edwin Tantawi | ${USER.contact.title}`}
      description={USER.contact.description}
      keyword={'contact me, contact, social media'}
    >
      <AppHeader
        title={USER.contact.title}
        description={USER.contact.description}
      />
      <AppSection title="Connect With Me">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {USER.contact.contents.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center border border-light-gray rounded-lg py-6 px-4 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full border border-orange grid place-items-center">
                <i className={`${item.icon} text-xl`} />
              </div>
              <h3 className="text-black font-semibold mt-3">{item.name}</h3>
              <p className="text-gray text-xs md:text-sm">{item.username}</p>
            </a>
          ))}
        </div>
      </AppSection>
      <AppSignature />
      <AppFooter />
    </AppShell>
  );
};

export default Contact;
