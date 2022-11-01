import Header from "./components/header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/feedbackstats";
import Form from "./components/feedbackform";
import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() { 
  return (
    <FeedbackProvider>
      <>
        <Header />
        <div className="container">
          <Form />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </>
    </FeedbackProvider>
  );
}

export default App;
