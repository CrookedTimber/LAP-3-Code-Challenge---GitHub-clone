import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card } from "react-bootstrap";
import { resetUser } from '../../actions';
import "./index.css";

const NotFound = () => {
  const dispatch = useDispatch();

  const resetButton = () => {
    dispatch(resetUser());
  };
  return (
    <>
    <Card className="error-card">
      <h1>Oh no! That user could not be found ...</h1>
      <h2> Please try again</h2>
      <Button className="close-button shadow" onClick={resetButton}>Try a different user!</Button>
    </Card>
    </>
  );
};

export default NotFound;