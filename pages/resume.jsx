import USER from '../data/user.json';
import AppHead from '../components/AppHead';
import AppNav from '../components/AppNav';
import AppDecoration from '../components/AppDecoration';
import AppSide from '../components/AppSide';
import AppContainer from '../components/AppContainer';
import AppHeader from '../components/AppHeader';

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
      </AppContainer>
    </div>
  );
};

export default Resume;
