import Head from 'next/head';
import PropTypes from 'prop-types';

const AppHead = ({ title, description, keyword, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content={`Edwin Tantawi, Edwin, Tantawi, edwintantawi, edwintantawi, wintantawi, web developer, portfolio, frontend developer, web developer, frontend enginer, indonesia, ${keyword}`}
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        name="google-site-verification"
        content="x_NCP81pzq_UseKnMEM1WLiZnzW-zbT8uW-qbscQUJM"
      />
    </Head>
  );
};

AppHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keyword: PropTypes.string,
  image: PropTypes.string,
};

AppHead.defaultProps = {
  title: 'Edwin Tantawi',
  description:
    'I am a student from Indonesia, who focuses on web development, especially frontend web development.',
  keyword: '',
  image: '/icon-192x192.png',
};

export default AppHead;
