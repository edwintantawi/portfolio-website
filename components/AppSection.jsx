import PropTypes from 'prop-types';
import AppDecoration from './AppDecoration';

const AppSection = ({ title, children }) => {
  const splitTitleColor = () => {
    const titleBase = title.split(' ');
    const titleStart = titleBase.slice(0, -1).join(' ');
    const titleEnd = titleBase.pop();
    return (
      <h2 className="text-xl lg:text-2xl font-bold text-center">
        {titleStart}
        <span className="text-orange"> {titleEnd}</span>
      </h2>
    );
  };

  return (
    <section className="py-14 lg:py-20 border-b border-light-gray">
      {splitTitleColor()}
      <AppDecoration type="threeline" />
      {children}
    </section>
  );
};

AppSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

AppSection.defaultProps = {
  title: '',
};

export default AppSection;
