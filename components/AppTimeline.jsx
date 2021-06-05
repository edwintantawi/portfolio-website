const AppTimeline = ({ title, subTitle, timeline, children }) => {
  return (
    <div className="py-7 px-4 border-l-2 border-light-gray">
      <div className="relative">
        <span className="text-xs inline-block py-[3px] px-5 rounded-full border border-orange">
          {timeline}
        </span>
        <span className="absolute w-3 h-3 bg-orange rounded-full left-[-23px] bottom-1/2 transform translate-y-1/2" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-9">
        <div className="my-2">
          <h3 className="text-base font-semibold">{title}</h3>
          <h4 className="text-xs lg:text-sm text-orange">{subTitle}</h4>
        </div>
        <div className="text-xs md:text-sm text-gray col-span-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppTimeline;
