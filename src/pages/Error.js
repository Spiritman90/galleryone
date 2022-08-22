import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Placard from "../customicons/Placard";

const Error = () => {
  // const [count, setCount] = useState(0);
  // const [startCount, setStartCount] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  // useEffect(() => {

  //   setStartCount(true);
  //   let count_down;
  //   if (startCount) {
  //     count_down = setInterval(() => {
  //       setCount((prevCount) => prevCount + 1);
  //     }, 1000);
  //   }
  //   if (count === 5) {
  //     clearInterval(count_down);
  //     navigate("/");
  //   }
  // }, [navigate]);

  return (
    <>
      <div className='error__page'>
        <div className='error__image'>
          <Placard />
        </div>
        <h4 className='error__heading'>Oops! We did not find anything</h4>
        {/* <p>You will be redirected in {count} seconds</p> */}
      </div>
    </>
  );
};

export default Error;
