import Card from "./shared/card";
import FeedbackContext from "./context/FeedbackContext";
import { useState, useContext } from "react";
import Button from "./shared/button";
import RatingSelect from "./ratingselect";

function Form() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [BtnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback } = useContext(FeedbackContext);

  const handleText = (t) => {
    if (text == "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be atleast 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(t.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>How would you rate our services?</h3>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a feedback"
            onChange={handleText}
            value={text}
          />
          <Button type="submit" version={`primary`} isDisabled={BtnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default Form;
