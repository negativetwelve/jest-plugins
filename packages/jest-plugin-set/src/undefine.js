const undefine = ({scope, name}) => {
  Object.defineProperty(scope, name, {
    configurable: true,

    get() {
      return undefined;
    },
  });
};


export default undefine;
