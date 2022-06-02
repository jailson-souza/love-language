import "./style.css";
import { useState } from "react";
import Question from "../Question";

import questions, {
  IQuestion,
  LoveLanguageCode,
  LoveLanguageText,
} from "../../data/questions";
import Modal from "../Modal";

interface IStateQuestion extends IQuestion {
  optionChecked: LoveLanguageCode | null;
}

interface IGroupResult {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
}

const initialDataState: IStateQuestion[] = questions.map(
  (question: IQuestion) => ({
    ...question,
    optionChecked: null,
  })
);

const initialGroupResult: IGroupResult = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
}

export default function FormQuestion() {
  const [dataQuestions, setDataQuestions] = useState<IQuestion[]>(questions);
  const [result, setResult] = useState<IStateQuestion[]>(initialDataState);
  const [groupResult, setGroupResult] = useState<IGroupResult>(initialGroupResult);
  const [isOpen, setiIsOpen] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [order, code] = event.target.id.split("-");
    const result_updated = result.map((question: IStateQuestion) =>
      question.order === Number(order)
        ? { ...question, optionChecked: code }
        : question
    );
    setResult(result_updated as IStateQuestion[]);
  };

  const handleCloseModal = () => {
    setiIsOpen(false);
    setResult(initialDataState);
    setGroupResult(initialGroupResult);
    setDataQuestions(questions);
  }

  const handleFinish = () => {
    const tempGroupResult = result.reduce(
      (acc, question: IStateQuestion) => ({
        ...acc,
        [question.optionChecked as string]:
          question.optionChecked && acc[question.optionChecked] + 1,
      }),
      groupResult
    );
    setGroupResult(tempGroupResult);
    setiIsOpen(true);
  };

  return (
    <>
      <form className="form-question">
        {dataQuestions.map((question, _) => (
          <Question
            question={question}
            key={question.order}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
        <button type="button" className="form-button" onClick={handleFinish}>
          Finalizar
        </button>
      </form>
      <Modal isOpen={isOpen} closeModal={handleCloseModal}>
        <>
          <h1>Resultado</h1>
          <ul className="list-result">
            <li>
              A: {LoveLanguageText.A} - {groupResult[LoveLanguageCode.A]}
            </li>
            <li>
              B: {LoveLanguageText.B} - {groupResult[LoveLanguageCode.B]}
            </li>
            <li>
              C: {LoveLanguageText.C} - {groupResult[LoveLanguageCode.C]}
            </li>
            <li>
              D: {LoveLanguageText.D} - {groupResult[LoveLanguageCode.D]}
            </li>
            <li>
              E: {LoveLanguageText.E} - {groupResult[LoveLanguageCode.E]}
            </li>
          </ul>
          <p>Sua linguagem de amor primaria é: </p>
          <h4>
            {
              LoveLanguageText[Object.keys(groupResult).reduce(
                (acc: any, key) =>
                  groupResult[key] > acc.point
                    ? { code: key, point: groupResult[key] }
                    : acc,
                { code: null, point: 0 }
              ).code]
            }
          </h4>
        </>
      </Modal>
    </>
  );
}
