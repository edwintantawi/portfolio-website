import PropTypes from 'prop-types';
import AppSection from './AppSection';

const AppHeader = ({ title, description }) => {
  return (
    <AppSection decoration={false}>
      <div className="mt-10 lg:mt-0">
        <h1 className="text-5xl lg:text-8xl font-bold text-black">{title}</h1>
        <p className="text-xs lg:text-sm text-gray max-w-sm tracking-widest mt-2">
          {description}
        </p>
      </div>
    </AppSection>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default AppHeader;
