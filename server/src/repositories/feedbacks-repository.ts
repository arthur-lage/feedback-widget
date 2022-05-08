export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface Feedback {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create?: (data: FeedbackCreateData) => Promise<void>;
  delete?: () => Promise<void>;
  get?: () => Promise<Feedback[]>;
}
