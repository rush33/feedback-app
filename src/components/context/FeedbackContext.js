import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetching feedback
  
  async function fetchFeedback() {
    // const res = await fetch(`/feedback?_sort=id&_order=desc`);
    const res = await fetch(
      `https://important-erin-veil.cyclic.app/feedback?_sort=id&_order=desc`
    );
    const data = await res.json();

    setFeedback(data);
    setIsLoading(false);
  }

  //Adding feedback
  const addFeedback = async (newFeedback) => {
    const res = await fetch("https://important-erin-veil.cyclic.app/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await res.json();

    setFeedback([data, ...feedback]);
    console.log("feedback added");
  };

  //Deleting feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`https://important-erin-veil.cyclic.app/feedback/${id}`, {
        method: "DELETE",
      });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
