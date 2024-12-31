import { useNavigate as useRouterNavigate } from 'react-router';
import { RoutePaths } from '../routes/routes';

const useNavigate = () => {
  const navigate = useRouterNavigate();

  const isValidRoute = (path: string): boolean => {
    return Object.values(RoutePaths).includes(path as RoutePaths);
  };

  const goTo = (path: string, fallbackPath: string = '/') => {
    if (isValidRoute(path)) {
      navigate(path);
    } else {
      console.error(`Invalid navigation path: ${path}`);
      navigate(fallbackPath);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  
  return {
    goTo,
    goBack,
    isValidRoute,
  };
};

export default useNavigate;
