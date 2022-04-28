import Topic, { ITopic } from "../../modules/share/model/topic";
import TopicExercise from "../../modules/share/model/topicExercise";
import { getEndpoint, post, postWithStatus } from "../../utils/fetcher";
import { CourseItem } from "./topic.slice";

export const apiGetEntryTopicsBySlugs = async (args: { slugs: string[]; local?: boolean }): Promise<{ notFound: boolean; data: CourseItem[]; error?: boolean }> => {
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
  serverSide?: boolean;
}): Promise<CourseItem[]> => {
  const { field = "orderIndex", asc = true, skip = 0, serverSide = false, ...rest } = args;
  const { data, error } = await postWithStatus({ endpoint: getEndpoint('/api/offset-topics-by-parent-id', serverSide), body: { field, asc, skip, ...rest } });
  return error ? [] : data;
}

export const apiGetTopicByParentId = async (args: { parentId: string, local?: boolean }) => {
  const { parentId, local = true } = args;
  const { data, error } = await post({ endpoint: getEndpoint('/api-cms/get-topic-by-parent-id', local), body: { parentId }});
  return error ? [] : data;
}