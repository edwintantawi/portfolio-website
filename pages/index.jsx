import AppHead from '../components/AppHead';
import AppNav from '../components/AppNav';
import AppHero from '../components/AppHero';
import AppSection from '../components/AppSection';
import AppContainer from '../components/AppContainer';

const Home = () => {
  return (
    <div>
      <AppHead />
      <AppNav />
      <AppHero />
      <AppContainer>
        <AppSection title="Ini contoh title">
          <h1>Hi</h1>
        </AppSection>
      </AppContainer>
    </div>
  );
};

export default Home;
