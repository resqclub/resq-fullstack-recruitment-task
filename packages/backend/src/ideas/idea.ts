/**
 * An idea submitted to the app
 */
export interface Idea {
  /**
   * Who submitted the idea
   */
  submittedBy: string;
  /**
   * When the idea was submitted
   */
  submittedAt: Date;
  /**
   * The idea that was submitted
   */
  content: string;
}
