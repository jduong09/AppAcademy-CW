Function.prototype.myThrottle = function(interval) {
  // declare a variable outside of the returned function
  let tooSoon = false;
  return (...args) => {
    // the function only gets invoked if tooSoon is false
    // it sets tooSoon to true, and uses setTimeout to set it back to
    // false after interval ms
    // any invocation within this interval will skip the if 
    // statement and do nothing
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(() => tooSoon = false, interval);
      this(...args);
    }
  }
}

Function.prototype.myDebounce = function(interval) {
  //returns a "debounced" function
  let timeout;

  return (...args) => {
    const fnCall = () => {
      timeout = null;
      this(...args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, interval);
  }
}
