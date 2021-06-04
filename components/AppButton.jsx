import PropTypes from 'prop-types';
import Link from 'next/link';

const AppButton = ({ title, href, className }) => {
  return (
    <Link href={href}>
      <a
        className={`inline-block w-max p-2 border border-light-gray mt-6 ${className}`}
      >
        <span className="text-xs lg:text-sm text-center font-bold text-white inline-block py-3 px-9 bg-orange hover:bg-black transition duration-300 min-w-[200px]">
          {title}
        </span>
      </a>
    </Link>
  );
};

AppButton.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

AppButton.defaultProps = {
  title: 'BUTTON',
  href: '/',
  className: '',
};

export default AppButton;
