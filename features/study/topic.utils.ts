import { apiOffsetTopicsByParentId } from "./topic.api";
import { CourseItem } from "./topic.slice";

export const getRelaTopicList = async (topic: CourseItem) => {
  const topics = await apiOffsetTopicsByParentId({
    courseId: topic.courseId,
    parentId: topic.parentId,
    topicFields: [
      "_id",
      "childType",
      "type",
      "status",
      "videoUrl",
      "courseId",
      "name",
      "shortDescription",
      "slug",
      "orderIndex",
      "parentId"
    ],
    field: "orderIndex",
    asc: true,
    serverSide: true
  });
  return topics;
}