const host = 'localhost:3000';

const route = (url: string): string => {
  return `${host}${url}`;
};

const routes = {
  user: () => route('/profile'),
};

export default routes;