import PropTypes from 'prop-types';
import AppContainer from './AppContainer';
import AppDecoration from './AppDecoration';
import AppHead from './AppHead';
import AppNav from './AppNav';
import AppSide from './AppSide';

const AppShell = ({ title, keyword, description, children }) => {
  return (
    <>
      <AppHead title={title} description={description} keyword={keyword} />
      <AppNav />
      <AppDecoration />
      <AppSide />
      <AppContainer>{children}</AppContainer>
    </>
  );
};

AppShell.propTypes = {
  title: PropTypes.string,
  keyword: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default AppShell;
