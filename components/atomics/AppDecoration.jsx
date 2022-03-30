import PropTypes from 'prop-types';

const AppDecoration = ({ type }) => {
  switch (type) {
    case 'fixline':
      return (
        <div className="fixed z-[-1] w-[80%] 2xl:w-[1200px] transform right-1/2 translate-x-1/2">
          <div className="decoration h-screen w-full" />
        </div>
      );
    case 'threeline':
      return (
        <div className="text-center mt-2 mb-3 lg:mb-5">
          <span className="inline-block bg-primary w-[1.5px] lg:w-[2px] h-8 lg:h-9" />
          <span className="inline-block bg-black w-[1.5px] lg:w-[2px] h-8 lg:h-9 mx-1 lg:mx-[5px] -mb-2" />
          <span className="inline-block bg-primary w-[1.5px] lg:w-[2px] h-8 lg:h-9" />
        </div>
      );
    default:
      return <p>Invalid props</p>;
  }
};

AppDecoration.propTypes = {
  type: PropTypes.oneOf(['fixline', 'threeline']),
};

AppDecoration.defaultProps = {
  type: 'fixline',
};

export default AppDecoration;
