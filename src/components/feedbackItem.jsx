import { FaTimes } from "react-icons/fa";
import {useContext} from 'react'
import Card from "./shared/card";
import FeedbackContext from './context/FeedbackContext'

function FeedbackItem({ item }) {

  const {deleteFeedback} = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={() => {
          deleteFeedback(item.id);
        }}
      >
        <FaTimes color="black" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Card.defaultProps = {
  default: false,
};

export default FeedbackItem;
