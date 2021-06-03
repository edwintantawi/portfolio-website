import AppHead from '../components/AppHead';

const Home = () => {
  return (
    <div>
      <AppHead />
      <h1 className="max-w-[200px] mx-auto text-center text-black">
        Portfolio Website with Next JS + Tailwindcss{' '}
        <i className="far fa-heart" />
      </h1>
    </div>
  );
};

export default Home;
