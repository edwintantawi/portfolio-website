import PropTypes from 'prop-types';
import AppSection from '../molecules/AppSection';

const AppHeader = ({ title, description }) => {
  const splitTitleCharColor = () => {
    const titleBase = title.split('');
    const titleStart = titleBase[0];
    const titleEnd = titleBase.slice(1, titleBase.length).join('');

    return (
      <h1 className="text-4xl lg:text-6xl font-bold text-black">
        <span className="text-primary">{titleStart}</span>
        {titleEnd}
      </h1>
    );
  };
  return (
    <AppSection decoration={false} noSeparator>
      <div className="mt-10 lg:mt-20 bg-light-gray p-7 lg:p-10 bg-opacity-30 rounded-lg lg:rounded-2xl text-center">
        {splitTitleCharColor()}
        <p className="text-xs lg:text-sm text-gray max-w-sm tracking-widest mt-3 lg:mt-5 mx-auto">
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

AppHeader.defaultProps = {
  title: 'AppHeader Title',
  description: 'AppHeader description',
};

export default AppHeader;
