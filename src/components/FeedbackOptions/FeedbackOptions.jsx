import { OptButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, index) => (
        <OptButton
          key={index}
          name={option}
          onClick={onLeaveFeedback}
          type="button"
        >
          {option}
        </OptButton>
      ))}
    </div>
  );
};
export default FeedbackOptions;
