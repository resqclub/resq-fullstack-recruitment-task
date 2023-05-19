import { Idea } from './idea';

const ideaCache: Idea[] = [];

/**
 * Returns all ideas from storage
 * @returns
 */
export const getIdeas = (): readonly Idea[] => ideaCache;

/**
 * Adds a new idea to storage
 * @param idea
 * @returns
 */
export const addIdea = (idea: Idea) => ideaCache.push(idea);
