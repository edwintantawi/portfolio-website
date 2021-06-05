import PropTypes from 'prop-types';

const AppContainer = ({ children }) => {
  return (
    <div className="max-w-[1430px] mx-auto md:px-36">
      <div className="max-w-[1140px] xl:border-light-gray xl:border-r xl:border-l ">
        <main className="max-w-[1000px] mx-auto px-3 relative z-20">
          {children}
        </main>
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
