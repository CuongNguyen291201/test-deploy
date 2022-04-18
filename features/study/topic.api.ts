import Topic, { ITopic } from "../../modules/share/model/topic";
import TopicExercise from "../../modules/share/model/topicExercise";
import { getEndpoint, post, postWithStatus } from "../../utils/fetcher";
import { TopicItem } from "./topic.slice";

export const apiGetEntryTopicsBySlugs = async (args: { slugs: string[]; local?: boolean }): Promise<{ notFound: boolean; data: Topic[]; error?: boolean }> => {
  const { local = false, slugs } = args;
  const { data, error } = await post({ endpoint: getEndpoint('/api/get-entry-topics-by-slugs', local), body: { slugs, maxDepth: 3 } });
  return error ? { notFound: true, data: [], error: true } : data;
}

export const apiOffsetTopicsByParentId = async (args: {
  parentId: string | null;
  courseId: string;
  field?: keyof ITopic;
  limit?: number;
  asc?: boolean;
  skip?: number;
  userId?: string;
  private?: boolean;
  topicFields?: Array<keyof Topic>;
  exerciseFields?: Array<keyof TopicExercise>;
}): Promise<TopicItem[]> => {
  const { field = "orderIndex", asc = true, skip = 0, ...rest } = args;
  const { data, error } = await postWithStatus({ endpoint: '/api/offset-topics-by-parent-id', body: { field, asc, skip, ...rest } });
  return error ? [] : data;
}