# React JS Training Code Snippets and Reference

## Table of Contents

0. [Web Development Market Trends](#web-development-market-trends)
1. [JavaScript](#javascript)
2. [Tools Setup](#tools-setup)
3. [React and JSX setup](#react-and-jsx-setup)
4. [State](#state)
5. [Tests](#tests)
6. [Redux](#redux)
7. [REST Architecture](#rest-architecture)
8. [Routing](#routing)
9. [Forms](#forms)
10. [Performance Optimization Techniques](#performance-optimization-techniques)
11. [Reference](#reference)

## **Web Development Market Trends**

### Zenika Academy
- [Zenika Singapore](https://zenika.sg/)
- [Zenika Trainings](https://training.zenika.com/en-sg/)
- [Learning path](https://coggle.it/diagram/XA8dSh9BxgHbBxDZ/t/zenika-academy/9816c61f7aa285c671d5ec48a74cc2f1452afebf4ff5a57083ead6556a7a96f5)
- [Zenika NightClazz](https://www.meetup.com/NightClazz-by-Zenika-Singapore/)

### Web Development Market Trends
- [Average Front End Developer Salary](https://www.payscale.com/research/SG/Job=Front_End_Developer_%2F_Engineer/Salary)
- [State of JavaScript 2018](https://2018.stateofjs.com)
- [State of CSS 2018](https://2019.stateofcss.com/)
- [2019 HackerRank Developer Skills Report](https://research.hackerrank.com/developer-skills/2019)
- [Developer Survey Results 2019](https://insights.stackoverflow.com/survey/2019)

**[⬆ back to top](#table-of-contents)**

## **JavaScript**
- [Can I use](https://caniuse.com)
- [RunJS - Write and run JavaScript instantly](https://runjs.dev)

```javascript
// ES6 Modules - export
export const myNumbers = [1, 2, 3, 4];

const myLogger = () => {
  console.log(myNumbers, pets);
}
export default myLogger;
```

```javascript
// ES6 Modules - import
import { myNumbers } from 'app.js';
import myLogger from 'app.js';
```

```javascript
// Arrow function
const sum = (x,y) => {
  return x + y;
}
const sum = (x,y) => x + y;
const sum = (x,y) => {
  return x + y;
}

sum(1,2);
```

```javascript
// Array spreading
const sum = (x, y, z) => x + y + z;
const numbers = [1, 2, 3];

sum(...numbers);
```

```javascript
// Object spreading
const coordinates = {
  address: '59 New Bridge Road',
  zipCode: '059405',
  country: 'Singapour'
}

const employee = {
  firstName: 'John',
  lastName: 'Doe',
  ...coordinates
}
```

**[⬆ back to top](#table-of-contents)**

## **Tools Setup**

- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [VS Code Extension: ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/itemdetails?itemName=dsznajder.es7-react-js-snippets)
- [VS Code Extension: Bracket Pair Colorizer](https://marketplace.visualstudio.com/itemdetails?itemName=CoenraadS.bracket-pair-colorizer)
- [VS Code Extension: Auto Close Tag](https://marketplace.visualstudio.com/itemdetails?itemName=formulahendry.auto-close-tag)

**[⬆ back to top](#table-of-contents)**

## **React and JSX setup**

```javascript
// Function component with no props
const Rule = () => <div>Rule</div>;

const Rule = () => {
  return <div>Rule</div>;
};

const Rule = () => {
  return (
    <div>Rule</div>
  );
};

// Function component with props
const Rule = props => <div>{props.title}</div>;

const Rule = props => {
  return <div>{props.title}</div>;
};

const Rule = props => {
  return (
    <div>{props.title}</div>
  );
};

// Function component with Destructuring props
const Rule = ({ title }) => <div>{title}</div>;

const Rule = ({ title }) => {
  return <div>{title}</div>;
};

const Rule = ({ title }) => {
  return (
    <div>{title}</div>
  );
};
```

```javascript
// Array as children
const newRules = rules.map(rule => (
  <Rule key={rule.id} rule={rule} />
));
```

- [Babel is a JavaScript compiler](https://babeljs.io)
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [React.js cheatsheet](https://devhints.io/react)
- [Create React App](https://github.com/facebook/create-react-app)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [React Bootstrap](https://react-bootstrap.github.io)

**[⬆ back to top](#table-of-contents)**

## **State**

```javascript
// Using the State Hook
import React, { useState } from 'react';

const Rule = props => {
  // Declare a new state variable, which we'll call "folded"
  const [folded, setFolded] = useState(false);

  return (
    <div className="panel panel-primary">
      ...
      <div className="panel-body" hidden={folded}>
        ...
      </div>
      ...
    </div>
  );
}
```

```javascript
// Typechecking With PropTypes
import PropTypes from "prop-types";

const LikeBtn = ({ type, counter }) => {
  ...
};

LikeBtn.defaultProps = {
  counter: 0
};

LikeBtn.propTypes = {
  type: PropTypes.oneOf(["up", "down"]).isRequired,
  counter: PropTypes.number
};
```

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [React Hooks Cheatsheet](https://react-hooks-cheatsheet.surge.sh)
- [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

**[⬆ back to top](#table-of-contents)**

## **Tests**

```javascript
import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Rule from "../Rule";
import rules from "../data.json";

describe("Rule", () => {
  let rule;
  let wrapper;

  beforeEach(() => {
    rule = rules[0];
    wrapper = render(<Rule rule={rule} />);
  });

  afterEach(cleanup);

  // Find by element text content
  it("should render rule title", () => {
    const titleElement = wrapper.getByText(rule.title);
    expect(titleElement).toBeInTheDocument();
  });

  // Find by title attribute
  it("should render rule likes", () => {
    const likesElement = wrapper.getByTitle("+1");
    expect(likesElement).toHaveTextContent(rule.likes);
  });
  
  // Callback fires on button click
  it("should hide description when clicking on title", () => {
    const titleElement = wrapper.getByText(rule.title);
    fireEvent.click(titleElement);

    const descriptionElement = wrapper.getByText(rule.description);
    expect(descriptionElement.parentNode).toHaveClass("hidden");
  });
});
```

- [react-testing-library](https://github.com/testing-library/react-testing-library)
- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [React Testing Examples](https://react-testing-examples.com/)
- [JavaScript End to End Testing Framework](https://www.cypress.io)

**[⬆ back to top](#table-of-contents)**

## **Redux**

### Redux Cycle:

![Redux Cycle](https://github.com/chesterheng/react-training/blob/master/concepts/27-8-19%2C%201_01%20PM%20Office%20Lens.jpeg)

### React Redux:

![React Redux](https://github.com/chesterheng/react-training/blob/master/concepts/IMG_7610.JPG)

```javascript
// Action creator
export const RULES_LOADED = "RULES_LOADED";
export const loadRules = () => {
  return {
    type: RULES_LOADED,
    payload: rules
  };
};
```

```javascript
// Reducer
import { RULES_LOADED } from "../actions/rules-actions";

const rulesReducer = (state = [], action) => {
  switch (action.type) {
    case RULES_LOADED: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default rulesReducer;
```

```javascript
// Store
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import rulesReducer from "../reducers/rules-reducer";

const logger = createLogger();
const rootReducer = combineReducers({
  rules: rulesReducer
});

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
```

```javascript
// Connect React components to store
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadRules } from "./actions/rules-actions";

const RuleList = ({ rules, loadRules }) => {
  useEffect(() => {
    loadRules();
  }, []);
  ...
};

const mapStateToProps = ({ rules }) => ({
  rules
});

const mapDispatchToProps = {
  loadRules
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleList);
```

```javascript
// Array-based state
import { 
  FETCH_RULES,
  FETCH_RULE,
  CREATE_RULE,
  EDIT_RULE,
  DELETE_RULE
} from "../actions/types";

const rulesReducer = (state=[], action) => {
  switch(action.type) {
    case FETCH_RULES:
      return action.payload;
    case FETCH_RULE:
      return [...state, action.payload];
    case CREATE_RULE:
      return [...state, action.payload];
    case EDIT_RULE: 
      const index = state.find(rule => rule.id === action.payload.id);
      const newRules = [...state];
      newRules[index] = action.payload;
      return newRules;
    case DELETE_RULE:
      const newRules = state.filter(rule => rule.id !== action.payload.id);
      return newRules;
    default: return state;
  }
}
```

```javascript
// Object-based state
import { 
  FETCH_RULES,
  FETCH_RULE,
  CREATE_RULE,
  EDIT_RULE,
  DELETE_RULE
} from "../actions/types";

const rulesReducer = (state={}, action) => {
  switch(action.type) {
    case FETCH_RULES:
      return action.payload
    case FETCH_RULE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_RULE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_RULE: 
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RULE:
      return { ...state, [action.payload.id]: undefined };
    default: return state;
  }
}
```

- [Redux](https://redux.js.org/)
- [Actions](https://redux.js.org/basics/actions)
- [Reducers](https://redux.js.org/basics/reducers)
- [Store](https://redux.js.org/basics/store)
- [Redux DevTools Extension](http://extension.remotedev.io)
- [Logger for Redux](https://github.com/LogRocket/redux-logger)
- [The best way to architect your Redux app](https://www.freecodecamp.org/news/the-best-way-to-architect-your-redux-app-ad9bd16c8e2d)

**[⬆ back to top](#table-of-contents)**

## **REST Architecture**

### Update Backend DB and Frontend Redux Store:

![Update Backend DB and Frontend Redux Store](https://github.com/chesterheng/react-training/blob/master/concepts/IMG_7614.JPG)

```javascript
// Store
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rulesReducer from "../reducers/rules-reducer";

const logger = createLogger();
const rootReducer = combineReducers({
  rules: rulesReducer
});

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
```

```javascript
// Async action creator
import axios from "axios";

export const RULES_LOADED = "RULES_LOADED";
export const loadRules = () => {
  return async dispatch => {
    try {
      const response = await axios.get("/rest/rules");
      dispatch({
        type: RULES_LOADED,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
```

```javascript
// Async action creator
import axios from "axios";

export const RULES_LOADED = "RULES_LOADED";
export const loadRules = () => async dispatch => {
  try {
    const response = await axios.get("/rest/rules");
    dispatch({
      type: RULES_LOADED,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
```

```javascript
// Using the Effect Hook
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Rule from "./Rule";
import { loadRules } from "./actions/rules-actions";

const RuleList = ({ rules, loadRules }) => {
  useEffect(() => {
    loadRules();
  }, []);

  const newRules = (rules || []).map(rule => (
    <Rule key={rule.id} pRule={rule} />
  ));
  return <Fragment>{newRules}</Fragment>;
};

const mapStateToProps = ({ rules }) => ({
  rules
});

const mapDispatchToProps = {
  loadRules
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RuleList);
```

- [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Axios](https://github.com/axios/axios)
- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [REST API Tutorial](https://restfulapi.net)

**[⬆ back to top](#table-of-contents)**

## **Routing**

```javascript
// Setup Router
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./Layout";
import store from "./store/app-store";

const reactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Layout} />
    </BrowserRouter>
  </Provider>
);
const domElement = document.getElementById("root");

ReactDOM.render(reactElement, domElement);
```

```javascript
// Setup Layout
import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import RuleList from "./RuleList";
import RuleForm from "./RuleForm";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="container">
          <Route exact path="/" component={RuleList} />
          <Route path="/new" component={RuleForm} />
          <Route path="/edit/:id" component={RuleForm} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
```

- [Redux Router](https://reacttraining.com/react-router/web/guides/quick-start)

**[⬆ back to top](#table-of-contents)**

## **Forms**

```javascript
// React form
import React, { Fragment } from "react";
import RuleTitleField from "./RuleTitleField";

const RuleForm = ({ rule }) => {
  const { id, title, description } = rule;
  return (
    <Fragment>
      <form>
        <RuleTitleField title={title} />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};
```

```javascript
// Convert react form to formik
import React, { Fragment } from "react";
import { Field, Form, Formik } from "formik";

const RuleForm = ({ rule }) => {
  const { id, title, description } = rule;
  
  const initialValues = {
    id,
    title: title || "",
    description: description || ""
  };
  
  return (
    <Fragment>
      <Formik
        onSubmit={values => console.log(values)}
        initialValues={initialValues}
        render={props => (
          <Form>
            <Field type="text" name="title" component={RuleTitleField} />
            <button type="submit">Submit</button>
          </Form>
        )}
      >
    </Fragment>
  );
};
```

```javascript
// Convert react form to formik
import React, { Fragment } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const RuleForm = ({ rule }) => {
  const { id, title, description } = rule;
  
  const initialValues = {
    id,
    title: title || "",
    description: description || ""
  };
  
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(50, "The title must be shorter than 50 characters")
      .required("Title is required"),
    description: Yup.string()
      .min(5, "The description must be longer than 5 characters")
      .max(100, "The description must be shorter than 100 characters")
  });
  
  return (
    <Fragment>
      <Formik
        onSubmit={values => console.log(values)}
        initialValues={initialValues}
        validationSchema={validationSchema}
        render={props => (
          <Form>
            <Field type="text" name="title" component={RuleTitleField} />
            <button type="submit">Submit</button>
          </Form>
        )}
      >
    </Fragment>
  );
};

export default App;
```

- [Formik](https://github.com/jaredpalmer/formik)
- [Yup](https://github.com/jquense/yup)

**[⬆ back to top](#table-of-contents)**

## **Performance Optimization Techniques**

### A checklist for eliminating common React performance issues
- Identify wasted renders 
  - Chrome -> Right-click -> Inspect -> ... -> More tools -> Rendering -> Paint flashing
- Extract frequently updated regions into isolated components
- Use pure components when appropriate
- Avoid passing new objects as props
- Use the production build 
  - npm build -> cd build -> npm start
- [Employ code splitting](https://reactjs.org/docs/code-splitting.html)

```javascript
// React.memo
import React, { memo } from 'react';

const MyComponent = memo(({username}) => {
  return (
    <div className="wrapper">
        <p>{username}</p>
    </div>
  )
})
```

```javascript
// React.PureComponent: if the state and props are the same
import React, { PureComponent } from 'react'

export default class MyComponent extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <p>{this.props.username}</p>
      </div>
    )
  }
}
```

```javascript
// Memoize expensive calculations - function
// `someProp` will be recalculated only when `item` changes
const MyComponent = ({ item }) => {
  const someProp = useMemo(() => heavyCalculation(item), [item]);
  return <AnotherComponent someProp={someProp} /> 
}
```

```javascript
// Avoid inline objects
// Don't do this!
const MyComponent = props => {
  const aProp = { someProp: 'someValue' }
  return <AnotherComponent style={{ margin: 0 }} aProp={aProp} />  
}

// Do this instead :)
const styles = { margin: 0 };
const MyComponent = props => {
  const aProp = { someProp: 'someValue' }
  return <AnotherComponent style={styles} {...aProp} />  
}
```

```javascript
// Avoid anonymous functions
// Don't do this!
const MyComponent = ({ id }) => {
  return <AnotherComponent onChange={() => console.log(id)} />  
}

// Do this instead :)
const MyComponent = ({ id }) => {
  const handleChange = () => console.log(id);
  return <AnotherComponent onChange={handleChange} />  
}
```

```javascript
// React.lazy: Code-Splitting with Suspense
import React, {lazy, Suspense} from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

const MyComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <OtherComponent />
  </Suspense>
)
 
export default MyComponent;
```

```javascript
// Tweak CSS instead of forcing a component to mount & unmount
// Avoid this is the components are too "heavy" to mount/unmount
const MyComponent = props => {
  const [view, setView] = useState('view1');
  return view === 'view1' ? <SomeComponent /> : <AnotherComponent />  
}

// Do this instead if you' re opting for speed & performance gains
const visibleStyles = { opacity: 1 };
const hiddenStyles = { opacity: 0 };
const MyComponent = props => {
  const [view, setView] = useState('view1');
  return (
    <React.Fragment>
      <SomeComponent style={view === 'view1' ? visibleStyles : hiddenStyles}>
      <AnotherComponent style={view !== 'view1' ? visibleStyles : hiddenStyles}>
    </React.Fragment>
  )
}
```

```javascript
// React.Fragments to Avoid Additional HTML Element Wrappers
import React, { Fragment } from 'react'
...
render() {
  <Fragment>
    <div></div>
    <div></div>
  </Fragment>
}
```

```javascript
// componentDidCatch(error, info) {}
class ErrorBoundary extends Component {

  state = { hasError: false };
  
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <div>All good!</div>
  }
}

<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

### Windowing - Virtualize Long Lists - 
- [react-window](https://github.com/bvaughn/react-window)
- [react-virtualized](https://github.com/bvaughn/react-virtualized)

**[⬆ back to top](#table-of-contents)**

## **Reference**

### Frontend Resources
- [Front-end Developer Handbook 2019](https://frontendmasters.com/books/front-end-handbook/2019)
- [CommitStrip](http://www.commitstrip.com/en)

### JavaScript Learning Resources - Beginner
- [Learn to code HTML, CSS, and JavaScript with Dash](https://dash.generalassemb.ly/)
- [javascripting](https://github.com/workshopper/javascripting)
- [The Modern Javascript Tutorial](http://javascript.info/)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Eloquent JavaScript](http://eloquentjavascript.net/)
- [JavaScript For Cats](http://jsforcats.com/)

### JavaScript Learning Resources - Advanced
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [CSX Structured JavaScript Learning Journey](https://csx.codesmith.io/)
- [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

### React Learning Resources
- [React Armory](https://reactarmory.com)
- [CRA vs Next.js vs Gatsby – Comparison and How to Choose One](https://coffeencoding.com/cra-vs-next-js-vs-gatsby)
- [Roadmap to becoming a React developer](https://github.com/adam-golab/react-developer-roadmap)
- [All the React Fundamentals in One Place](https://jscomplete.com/learn/react-beyond-basics/react-fundamentals)
- [React official documentation](https://reactjs.org/docs/getting-started.html)
- [React patterns](https://reactpatterns.com/)
- [The Road to learn React](https://leanpub.com/the-road-to-learn-react)
- [Overreacted](https://overreacted.io/)
- [Enterprise React in 2018–2019](https://medium.com/@viacheslavlushchinskiy/enterprise-react-in-2018-2019-ae6c80c03f1)
- [The (new) React lifecycle methods in plain, approachable language](https://blog.logrocket.com/the-new-react-lifecycle-methods-in-plain-approachable-language-61a2105859f3)

### React 3rd Party Libraries
- [Essential React Libraries in 2019](https://www.robinwieruch.de/essential-react-libraries-framework)
- [Awesome React](https://github.com/enaqx/awesome-react)
- [React Ecosystem Guide](https://itnext.io/react-ecosystem-guide-4a5f85d17623)

### React UI Framework
- [React Bootstrap](https://react-bootstrap.github.io)
- [Material-UI: A popular React UI framework](https://material-ui.com)
- [Ant Design - The world's second most popular React UI framework](https://ant.design)
- [PrimeReact - PrimeFaces](https://www.primefaces.org/primereact)

### React Charts
- [React-Vis](https://uber.github.io/react-vis)
- [Recharts](http://recharts.org/en-US)
- [Chart.js](https://www.chartjs.org)
- [Victory](https://formidable.com/open-source/victory/?r=m7&source=post_page)
- [nivo](https://nivo.rocks)
- [React Google Charts](https://react-google-charts.com)
- [React JSX Highcharts](https://whawker.github.io/react-jsx-highcharts/examples)
- [React Timeseries Chart](http://software.es.net/react-timeseries-charts/#/guide/intro)
- [React Stockcharts](https://rrag.github.io/react-stockcharts)
-	[echarts](https://echarts.apache.org/en/index.html)
- [BizCharts](https://bizcharts.net/products/bizCharts/demo)
- [FusionCharts](https://www.fusioncharts.com)	
- [VX](https://vx-demo.now.sh)

**[⬆ back to top](#table-of-contents)**
