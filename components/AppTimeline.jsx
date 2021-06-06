import PropTypes from 'prop-types';

const AppTimeline = ({ item, children }) => {
  return (
    <div className="py-7 px-5 border-l border-orange">
      <div className="relative">
        <span className="text-xs inline-block py-[3px] px-5 rounded-full border border-orange">
          {item.timestamp}
        </span>
        <span className="absolute w-3 h-3 bg-orange rounded-full left-[-26.5px] bottom-1/2 transform translate-y-1/2" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-9">
        <div className="my-2">
          <h3 className="text-base font-semibold">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {item.name}{' '}
              <i className="fas fa-link text-xs text-gray hidden group-hover:inline" />
            </a>
          </h3>
          <h4 className="text-xs lg:text-sm text-orange">{item.info}</h4>
        </div>
        <div className="text-xs md:text-sm text-gray col-span-2">
          {children}
        </div>
      </div>
    </div>
  );
};

AppTimeline.propTypes = {
  item: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default AppTimeline;
