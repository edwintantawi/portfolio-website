import PropTypes from 'prop-types';

const AppContainer = ({ children }) => {
  return (
    <div className="max-w-[1430px] mx-auto md:px-36">
      <div className="max-w-[1140px] xl:border-light-gray xl:border-r xl:border-l ">
        <div className="max-w-[1000px] mx-auto px-3">{children}</div>
      </div>
    </div>
  );
};

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default AppContainer;
