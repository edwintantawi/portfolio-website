import PropTypes from 'prop-types';

const AppToggle = ({ active, onClick }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className="flex md:hidden flex-col w-8 h-8 space-y-[6px] justify-center"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <span
        className={`w-full h-[2px] bg-orange transform origin-top-right transition duration-500 ${
          active && '-rotate-45 -translate-x-1 -translate-y-px bg-black'
        }`}
      />
      <span
        className={`w-full h-[2px] bg-black -ml-2 transform transition duration-500 ${
          active && '-ml-0 translate-x-[100vw]'
        } `}
      />
      <span
        className={`w-full h-[2px] bg-orange transform origin-bottom-right transition duration-500 ${
          active && 'rotate-45 translate-y-1 -translate-x-1'
        }`}
      />
    </a>
  );
};

AppToggle.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

AppToggle.defaultProps = {
  active: false,
};

export default AppToggle;
