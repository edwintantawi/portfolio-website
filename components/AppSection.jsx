import PropTypes from 'prop-types';
import AppDecoration from './AppDecoration';

const AppSection = ({
  title,
  center,
  children,
  decoration,
  className,
  noSeparator,
}) => {
  const splitTitleColor = (title) => {
    const titleBase = title.split(' ');
    const titleStart = titleBase.slice(0, -1).join(' ');
    const titleEnd = titleBase.pop();
    return (
      <h2
        className={`${
          center && 'text-center'
        } text-xl lg:text-2xl font-bold mb-0 text-center`}
      >
        {titleStart}
        <span className="text-orange"> {titleEnd}</span>
      </h2>
    );
  };

  return (
    <section
      className={`py-10 lg:py-16 px-3 ${
        noSeparator || 'border-b border-light-gray border-opacity-50'
      } ${className} `}
    >
      {splitTitleColor(title)}
      {decoration && <AppDecoration type="threeline" />}
      {children}
    </section>
  );
};

AppSection.propTypes = {
  title: PropTypes.string,
  center: PropTypes.bool,
  decoration: PropTypes.bool,
  className: PropTypes.string,
  noSeparator: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

AppSection.defaultProps = {
  title: '',
  center: false,
  decoration: true,
  className: '',
  noSeparator: false,
};

export default AppSection;
