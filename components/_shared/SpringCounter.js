import React from "react";

import { Spring, config } from "react-spring";

export default function CounterComponent() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Spring
        config={config.slow}
        from={{ num: 1 }}
        to={{ num: 100 }}
        delay="1000"
      >
        {(props) => (
          <div>
            <h4>{props.num.toFixed()}</h4>
          </div>
        )}
      </Spring>
    </div>
  );
}
