import AppButton from './AppButton';
import AppSection from './AppSection';

const AppCtaSection = () => {
  return (
    <AppSection title="GET IN TOUCH" closed>
      <div className="text-center">
        <p className="text-xs md:text-sm text-gray max-w-[260px] md:max-w-xs mx-auto ">
          Is there anything I can help you with? My inbox and social media are
          always open to you, feel free to ask, I will try my best for you.
          Thank you for visiting.
        </p>
        <AppButton title="Say Hi.." href="/contact" />
      </div>
    </AppSection>
  );
};

export default AppCtaSection;
