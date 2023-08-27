 const Routes = {
 
    ProduitsDetails: {
      path: '/[id]',
    },
    

};

export const createURL = (path) =>
  typeof window !== 'undefined' ? `${path}` : '';

export default Routes;

  