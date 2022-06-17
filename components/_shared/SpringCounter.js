import { Spring,config } from "react-spring";

const SpringCounter = ({ fn, tn }) => {
  return (
    <>
      <Spring
        config={config.slow}
        from={{ num: fn }}
        to={{ num: tn }}
        delay="1000"
      >
        {(props) => <div className="counter-style">{props.num.toFixed()}</div>}
      </Spring>
    </>
  );
};

export default SpringCounter;
