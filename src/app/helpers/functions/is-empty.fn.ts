const isEmpty = (x: any): boolean => {
  if (x instanceof Array || typeof x == 'string') {
    return x.length == 0;
  }
  if (typeof x == 'object') {
    return Object.keys(x).length == 0;
  }

  return true;
};
export default isEmpty;