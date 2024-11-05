const customMiddleware1 = (store) => (next) => (action) => {
  if (action.type === "modalStateSlice/handleModalVisibility") {
    console.log("Custom Middleware 1:", action.type, action, store);
  } 
  return next(action);
};

export default customMiddleware1;
