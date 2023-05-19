import { Idea } from './idea';

/**
 * Validates that a submitted idea matches our requiremetns
 * @param idea
 */
export const validateIdea = ({ content, submittedBy }: Idea): boolean => {
  if (!content) {
    // Empty ideas are not useful
    return false;
  }

  if (content.length > 280) {
    // We can't be bothered to read submissions longer than a tweet
    return false;
  }

  if (submittedBy.toLowerCase() === 'peter') {
    // This guy's ideas should be ignored
    return false;
  }

  return true;
};
