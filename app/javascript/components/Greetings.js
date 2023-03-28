import React, { useEffect } from "react";
import { getGreeting } from "../redux/fetchdata";
import { useSelector, useDispatch } from "react-redux";

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  const message = useSelector((state) => state.greeting);

  return (
    <div>
      <h1>Greetings</h1>
      <div>Message: {message.message}</div>
    </div>
  );
};

export default Greeting;
