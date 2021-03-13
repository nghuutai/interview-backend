import { Forbidden } from './error';

const checkRole = (allowed) => (req, res, next) => {
  const userData = res.locals.user;
  const role = userData.role;
  const isAllowed = allowed.indexOf(role);
  if (isAllowed <= -1) {
    next(new Forbidden('Your role is not allowed'));
  }
  next();
};

export { checkRole };
