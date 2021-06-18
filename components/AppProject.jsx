import PropTypes from 'prop-types';
import Image from 'next/image';

const AppProject = ({ project }) => {
  return (
    <div className="bg-white border border-light-gray rounded-lg px-4 pt-6 text-center overflow-hidden">
      <div className="mb-3">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <h3 className="text-black text-base lg:text-xl font-semibold transition duration-300 hover:text-orange">
            {project.name}
          </h3>
        </a>
        <p className="text-gray text-xs">{project.stack}</p>
      </div>
      <div>
        <Image
          src={project.image}
          alt={project.name}
          layout="responsive"
          width={100}
          height={60}
          quality={40}
          className="transition duration-300 transform translate-y-5 hover:translate-y-0 shadow-xl "
        />
      </div>
    </div>
  );
};

AppProject.propTypes = {
  project: PropTypes.object,
};

export default AppProject;
