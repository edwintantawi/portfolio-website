import PropTypes from 'prop-types';
import AppSection from './AppSection';

const AppHeader = ({ title, description }) => {
  const splitTitleCharColor = (title) => {
    const titleBase = title.split('');
    const titleStart = titleBase[0];
    const titleEnd = titleBase.slice(1, titleBase.length).join('');

    return (
      <h1 className="text-4xl lg:text-6xl font-bold text-black">
        <span className="text-orange">{titleStart}</span>
        {titleEnd}
      </h1>
    );
  };
  return (
    <AppSection decoration={false}>
      <div className="mt-10 lg:mt-0">
        {splitTitleCharColor(title)}
        <p className="text-xs lg:text-sm text-gray max-w-[250px] md:max-w-sm tracking-widest mt-2">
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
