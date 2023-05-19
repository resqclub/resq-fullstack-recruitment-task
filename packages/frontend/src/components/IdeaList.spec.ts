import { render, screen } from '@testing-library/vue';
import IdeaList from './IdeaList.vue';
import { Idea } from '../idea';

describe('IdeaList', () => {
  it('displays the content of the provided ideas', () => {
    const ideas: Idea[] = [
      {
        submittedBy: 'James',
        submittedAt: new Date(),
        content: 'This is a great idea',
      },
      {
        submittedBy: 'James',
        submittedAt: new Date(),
        content: 'This is another great idea',
      },
      {
        submittedBy: 'Artemis',
        submittedAt: new Date(),
        content: 'This is a third and final amazingly smart idea',
      },
    ];

    render(IdeaList, {
      props: {
        ideas,
      },
    });

    ideas.forEach((idea) => {
      expect(screen.queryByText(idea.content)).toBeTruthy();
    });
  });
});
