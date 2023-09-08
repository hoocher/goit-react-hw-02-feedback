const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          name={option}
          onClick={onLeaveFeedback}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
