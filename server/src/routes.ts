import loadable from '@loadable/component';

const About = loadable(
  /* #__LOADABLE__ */ () => import('@server/views/pages/About')
);
const Home = loadable(
  /* #__LOADABLE__ */ () => import('@server/views/pages/Home')
);

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];

export default routes;
