"use client";

import { useState } from "react";
import { ArrowLeft, CalendarCheck, CheckCircle2, RotateCcw } from "lucide-react";
import { quizAnswerOptions, quizProfiles, quizQuestions, SITE } from "@/lib/site-data";

export function DiagnosticQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => Array.from({ length: quizQuestions.length }, () => null),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const score = answers.reduce<number>((total, points) => total + (points ?? 0), 0);
  const profile =
    quizProfiles.find((candidate) => score >= candidate.min && score <= candidate.max) ??
    quizProfiles[quizProfiles.length - 1];

  function selectAnswer(points: number) {
    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = points;
    setAnswers(nextAnswers);

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsDone(true);
    }
  }

  function goBack() {
    if (isDone) {
      setIsDone(false);
    } else if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function restart() {
    setAnswers(Array.from({ length: quizQuestions.length }, () => null));
    setCurrentIndex(0);
    setIsDone(false);
  }

  const progress = isDone
    ? 100
    : Math.round((currentIndex / quizQuestions.length) * 100);

  return (
    <div className="quiz" id="auto-diagnostic">
      <div className="quiz__progress" role="presentation">
        <span style={{ width: `${progress}%` }} />
      </div>

      {!isDone ? (
        <div className="quiz__body">
          <p className="quiz__counter">
            Question {currentIndex + 1} sur {quizQuestions.length}
          </p>

          {quizQuestions.map((question, index) => (
            <fieldset className="quiz__question" hidden={index !== currentIndex} key={question}>
              <legend>{question}</legend>
              <div className="quiz__options">
                {quizAnswerOptions.map((option) => (
                  <button
                    className={
                      answers[index] === option.points
                        ? "quiz__option quiz__option--selected"
                        : "quiz__option"
                    }
                    key={option.label}
                    type="button"
                    onClick={() => selectAnswer(option.points)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </fieldset>
          ))}

          {currentIndex > 0 ? (
            <button className="quiz__back" type="button" onClick={goBack}>
              <ArrowLeft aria-hidden="true" /> Question précédente
            </button>
          ) : null}
        </div>
      ) : (
        <div className="quiz__result" role="status">
          <p className="eyebrow">Votre résultat</p>
          <p className="quiz__score">
            <strong>{score}</strong> / 30 points
          </p>
          <h3>{profile.title}</h3>
          <p className="quiz__estimate">{profile.estimate}</p>
          <p>{profile.text}</p>

          <div className="quiz__actions-block">
            <p>Vos 3 premières actions :</p>
            <ul>
              {profile.actions.map((action) => (
                <li key={action}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="quiz__result-cta">
            <a className="button button--gold" href={SITE.calendlyUrl}>
              <CalendarCheck aria-hidden="true" />
              On en parle ? 15 minutes offertes
            </a>
            <button className="quiz__back" type="button" onClick={restart}>
              <RotateCcw aria-hidden="true" /> Refaire le test
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
