import { validateIdea } from './validate';

describe('Idea validation', () => {
  it("should reject all of Peter's ideas", () => {
    const baseIdea = {
      content: 'basic content',
      submittedAt: new Date(),
    };

    expect(validateIdea({ ...baseIdea, submittedBy: 'peter' })).toBe(false);
    expect(validateIdea({ ...baseIdea, submittedBy: 'Peter' })).toBe(false);
    expect(validateIdea({ ...baseIdea, submittedBy: 'PETER' })).toBe(false);
    expect(validateIdea({ ...baseIdea, submittedBy: 'james' })).toBe(true);
  });

  it('should reject ideas with more than 280 characters of content', () => {
    const baseIdea = {
      submittedBy: 'James',
      submittedAt: new Date(),
    };

    const makeStringOfLength = (length: number) =>
      new Array(length + 1).join('a');

    expect(
      validateIdea({ ...baseIdea, content: makeStringOfLength(281) })
    ).toBe(false);
    expect(
      validateIdea({ ...baseIdea, content: makeStringOfLength(280) })
    ).toBe(true);
  });

  it('should reject ideas with empty content', () => {
    const baseIdea = {
      submittedBy: 'James',
      submittedAt: new Date(),
    };

    expect(validateIdea({ ...baseIdea, content: '' })).toBe(false);
    expect(validateIdea({ ...baseIdea, content: 'a' })).toBe(true);
  });
});
