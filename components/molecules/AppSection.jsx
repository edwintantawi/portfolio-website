import PropTypes from 'prop-types';
import AppDecoration from '../atomics/AppDecoration';

const AppSection = ({ title, children, decoration, noSeparator }) => {
  const splitTitleColor = () => {
    const titleBase = title.split(' ');
    const titleStart = titleBase.slice(0, -1).join(' ');
    const titleEnd = titleBase.pop();
    return (
      <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center">
        {titleStart}
        <span className="text-primary"> {titleEnd}</span>
      </h2>
    );
  };

  return (
    <section
      className={`py-10 lg:py-16 px-3 ${
        noSeparator || 'border-b border-light-gray border-opacity-50'
      }`}
    >
      {splitTitleColor(title)}
      {decoration && <AppDecoration type="threeline" />}
      {children}
    </section>
  );
};

AppSection.propTypes = {
  title: PropTypes.string,
  decoration: PropTypes.bool,
  noSeparator: PropTypes.bool,
};

AppSection.defaultProps = {
  title: '',
  decoration: true,
  noSeparator: false,
};

export default AppSection;
