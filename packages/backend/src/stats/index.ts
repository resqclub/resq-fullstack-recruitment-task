import type { Idea } from '../ideas/idea';
import { readIdeas } from '../ideas';

const getUniqueParticipants = (ideas: readonly Idea[]) => ideas.reduce((uniqueParticipants, idea) => {
    uniqueParticipants.add(idea.submittedBy);
    return uniqueParticipants;
}, new Set<string>());

const getLatestIdea = (ideas: readonly Idea[]) => [...ideas]
    .sort((ideaA, ideaB) => ideaB.submittedAt.getTime() - ideaA.submittedAt.getTime())[0];

export const readStats = () => {
    const allIdeas = readIdeas();

    const totalIdeas = allIdeas.length ?? 0;
    const uniqueParticipants = getUniqueParticipants(allIdeas);
    const latestIdea = getLatestIdea(allIdeas);

    return {
        totalIdeas,
        totalParticipants: Array.from(uniqueParticipants.values()).length,
        latestIdeaTime: latestIdea?.submittedAt,
    };
};