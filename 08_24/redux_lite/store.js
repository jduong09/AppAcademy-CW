//Phase 1 - Store
//Phase 2 - Reducers, rootReducer, and combineReducers
class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = rootReducer({});
    this.subscriptions = [];

    this.getState = this.getState.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.subscribe = this.subscribe.bind(this);
  };

  getState() {
    return Object.assign({}, this.state);
  };

  dispatch(action) {
    this.state = this.rootReducer(this.state, action, this.subscriptions);
  }

  subscribe(cb) {
    this.subscriptions.push(cb);
  }
};

//takes in an object and returns a single reducer
//accept prevState and action
//go through each key in prevState
//find the old value of that key
//pass that value and the action into the appropriate reducer
// return a new object, with all new values returned from the reducers
// allReducers ex: { user: userReducer, role: roleReducer };
const combineReducers = config => {
  return (prevState, action, subscriptions) => {
    const nextState = {};
    let stateChanged = false;
    Object.keys(config).forEach(k => {
      if (!action) {
        const args = [ , { type: "_initialize" }];
        nextState[k] = config[k](...args);
        stateChanged = true;
      } else {
        const next = config[k](prevState[k], action);
        if (next !== prevState[k]) {
          stateChanged = true;
        }
        nextState[k] = next;
      }
    });

    if (stateChanged) {
      if (subscriptions) {
        subscriptions.forEach(cb => cb(nextState));
      } 
      return nextState;
    }
    return prevState;
  }
};

const actionCreator1 = value => ({
  type: "add",
  value
});

const actionCreator2 = value => ({
  type: "subtract",
  value
});

const actionCreator3 = value => ({
  type: "no change",
  value
});

const numberReducer = (num = 0, action) => {
  switch(action.type) {
    case "add":
      return num + action.value;
    case "subtract":
      return num - action.value;
    default:
      return num;
  }
}

const rootReducer = combineReducers({
  number: numberReducer
});

const store = new Store(rootReducer);

console.log(store.getState()); // => { number: 0 }

const announceStateChange = nextState => {
  console.log(`That action changed the state! Number is now ${nextState.number}`);
}

store.subscribe(announceStateChange);

store.dispatch(actionCreator1(5)); // => "That action changed the state! Number is now 5"
store.dispatch(actionCreator1(5)); // => "That action changed the state! Number is now 10"
store.dispatch(actionCreator2(7)); // => "That action changed the state! Number is now 3"
store.dispatch(actionCreator3(7)); // => Nothing should happen! The reducer doesn't do anything for type "no change"
store.dispatch(actionCreator1(0)); // => Nothing should happen here either. Even though the reducer checks for the "add" action type, adding 0 to the number won't result in a state change.

store.getState(); // => { number: 3 }

