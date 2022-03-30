import USER from '../data/user.json';
import AppShell from '../components/templates/AppShell';
import AppSection from '../components/molecules/AppSection';
import AppHeader from '../components/organisms/AppHeader';

const Contact = () => (
  <AppShell
    title={`Edwin Tantawi | ${USER.contact.title}`}
    description={USER.contact.description}
    keyword="contact me, contact, social media"
    cta={false}
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
            className="flex flex-col items-center border border-light-gray rounded-lg py-6 px-4 transition duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-full border border-primary grid place-items-center">
              <i className={`${item.icon} text-xl`} />
            </div>
            <h3 className="text-black font-semibold mt-3">{item.name}</h3>
            <p className="text-gray text-xs md:text-sm">{item.username}</p>
          </a>
        ))}
      </div>
    </AppSection>
  </AppShell>
);

export default Contact;
