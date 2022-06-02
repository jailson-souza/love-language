import { IQuestion } from "../../data/questions";
import "./style.css";

export interface IQuestionProps {
  question: IQuestion;
  handleCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Question(props: IQuestionProps) {

  const { order, options } = props.question;
  const { handleCheckboxChange } = props;

  return (
    <div className="q-box">
      <div className="q-box-order">{order}</div>

      <div className="q-box-answer">
        {options.map((option, _) => (
          <div className="q-box-answer-option" key={`${order}-${option.loveLanguageCode}`}>
            <input
              className="form-check-input"
              type="radio"
              name={`${order}`}
              id={`${order}-${option.loveLanguageCode}`}
              onChange={handleCheckboxChange}
            />
            <label
              className="form-check-label"
              htmlFor={`${order}-${option.loveLanguageCode}`}
            >
              {option.answer}
            </label>
            <h3>{option.loveLanguageCode}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
