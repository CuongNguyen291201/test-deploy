import Topic from "../../modules/share/model/topic";
import { getEndpoint, post } from "../../utils/fetcher";

export const apiGetEntryTopicsBySlugs = async (args: { slugs: string[]; local?: boolean }): Promise<{ notFound: boolean; data: Topic[]; error?: boolean }> => {
  const { local = false, slugs } = args;
  const { data, error } = await post({ endpoint: getEndpoint('/api/get-entry-topics-by-slugs', local), body: { slugs, maxDepth: 3 } });
  return error ? { notFound: true, data: [], error: true } : data;
}

export const apiOffsetTopicsByParentId =async (args: {
  parentId: string;
}) => {
  
}