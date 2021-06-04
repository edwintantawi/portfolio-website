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
        <div className="text-center mt-2 mb-5">
          <span className="inline-block bg-orange w-px lg:w-[2px] h-6 lg:h-7" />
          <span className="inline-block bg-black w-px lg:w-[2px] h-6 lg:h-7 mx-[4px] -mb-2" />
          <span className="inline-block bg-orange w-px lg:w-[2px] h-6 lg:h-7" />
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
