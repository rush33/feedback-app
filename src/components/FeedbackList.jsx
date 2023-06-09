import React from "react";
import FeedbackItem from "./feedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackList() {
    const [feedbackList, setFeedbackList] = useState([]);
    const {feedback} = useContext(FeedbackContext);
    useEffect(() => {
    // This function will run when the feedbackList component is rendered.
    // It will fetch the feedback items from the backend and update the feedbackList state variable.
    fetch(`https://important-erin-veil.cyclic.app/feedback?_sort=id&_order=desc`)
      .then(response => response.json())
      .then(feedback => setFeedbackList(feedback));
  }, []);

  if (!feedbackList || feedbackList.length === 0) {
    return <p>No feedback yet.</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackList.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
