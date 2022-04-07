import { Grid } from "@mui/material";
import classNames from "classnames";
import _ from "lodash";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useDispatch, useSelector } from "../../../app/hooks";
import { ROUTER_STUDY } from "../../../app/router";
import Topic from "../../../modules/share/model/topic";
import { setCurrentTopic, setCurrentTopicIndex } from "../topic.slice";
import "./style.scss";

const TOPIC_CHUNK_SIZE = 3;
// const currentTopicList = [
//   { _id: 1, name: "Exercise 1" },
//   { _id: 2, name: "Exercise 2" },
//   { _id: 3, name: "Exercise 3" },
//   { _id: 4, name: "Exercise 4" },
//   { _id: 5, name: "Exercise 5" },
//   { _id: 6, name: "Exercise 6" },
//   { _id: 7, name: "Exercise 7" },
//   { _id: 8, name: "Exercise 8" },
//   { _id: 9, name: "Exercise 9" },
// ]

const CurrentTopicList = () => {
  const currentTopicList = useSelector((state) => state.topicState.currentList);
  const currentTopic = useSelector((state) => state.topicState.currentTopic);
  const currentTopicIdx = useSelector((state) => state.topicState.currentIndex);
  const nextTopic = currentTopicIdx !== currentTopicList.length - 1 ? currentTopicList[currentTopicIdx + 1] : null;

  const topicChunks: Array<Array<Topic>> = useMemo(() =>
    _.reduce(currentTopicList, (chunks, topic, index) => {
      const chunkIndex = Math.floor(index / TOPIC_CHUNK_SIZE);
      chunks[chunkIndex] = [...(chunks[chunkIndex] || []), topic];
      return chunks
    }, []),
    [currentTopicList.length]
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const onClickTopic = (item: Topic) => {
    if (item._id === currentTopic._id) return;
    const currentIndex = currentTopicList.findIndex((topic) => topic._id === item._id);
    dispatch(setCurrentTopic(item));
    dispatch(setCurrentTopicIndex(currentIndex));
    const slugs = router.query.slugs as string[];
    const slug = `/${ROUTER_STUDY}/${[...slugs.slice(0, -1), item.slug].join("/")}`;
    window.history.pushState({ as: slug, url: `/${ROUTER_STUDY}/[...slugs]`, options: { shallow: true } }, '', slug)
  }

  return (<div id="current-topic-list">
    {topicChunks.map((chunk, index) => {
      const isReversed = index % 2 !== 0;
      return <Grid container key={index} className="topic-levels" spacing={1} flexDirection={isReversed ? "row-reverse" : "row"}>
        {chunk.map((topic, cIndex) => {
          const isActive = currentTopic._id === topic._id;
          const hasAfterConnector = cIndex < TOPIC_CHUNK_SIZE - 1 && cIndex !== chunk.length - 1;
          const hasBeforeConnector = index > 0 && cIndex === 0;
          return (
            <Grid item xs={4} key={topic._id}>
              <div
                className={classNames(
                  "topic-level-item",
                  isActive ? "current-level" : "",
                  hasAfterConnector ? (isReversed ? "after-connector-reversed" : "after-connector"): "",
                  hasBeforeConnector ? "before-connector" : "",
                )}
                onClick={() => onClickTopic(topic)}
              >
                {topic.name}
              </div>
            </Grid>
          )
        })}
      </Grid>
    })}
  </div>)
}

export default CurrentTopicList;