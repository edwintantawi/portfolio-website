import AppButton from '../atomics/AppButton';

const AppCtaSection = () => (
  <section className="py-20 border-b border-light-gray">
    <div className="text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-black">
        GET IN TOUCH
      </h2>
      <p className="text-xs md:text-sm text-gray max-w-[260px] md:max-w-xs mx-auto mt-2">
        Is there anything I can help you with? My inbox and social media are
        always open to you, feel free to ask, I will try my best for you. Thank
        you for visiting.
      </p>
      <AppButton title="Say Hi.." href="/contact" color="primary" />
    </div>
  </section>
);

export default AppCtaSection;
