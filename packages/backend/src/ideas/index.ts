import { Idea } from './idea';
import { getIdeas, addIdea } from './persistence';
import { validateIdea } from './validate';

export { generateRandomIdeaContent } from './random';

export const createIdea = (idea: Omit<Idea, 'submittedAt'>) => {
  const withSubmittedDate = {
    ...idea,
    submittedAt: new Date(),
  };

  if (!validateIdea(withSubmittedDate)) {
    throw new Error('Invalid idea');
  }

  addIdea(withSubmittedDate);
};

export const readIdeas = getIdeas;
