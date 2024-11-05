const customMiddleware2 = store => next => action => {
    console.log('Custom Middleware 2:', action.payload, store);
    return next(action);
  };
  
  export default customMiddleware2;
  