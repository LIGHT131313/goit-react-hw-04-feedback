import { useState } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedbacks, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedbacks;

  const handleClickBtn = option => {
    setFeedback({ ...feedbacks, [option]: feedbacks[option] + 1 });
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  const options = Object.keys(feedbacks);

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClickBtn}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
