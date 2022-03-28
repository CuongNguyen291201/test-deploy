import { Card, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../../app/hooks";
import { ROUTER_STUDY } from "../../../app/router";
import Topic from "../../../modules/share/model/topic";
import { setCurrentTopic, setCurrentTopicIndex } from "../topic.slice";

const CurrentTopicList = () => {
  const currentTopicList = useSelector((state) => state.topicState.currentList);
  const currentTopic = useSelector((state) => state.topicState.currentTopic);
  const currentTopicIdx = useSelector((state) => state.topicState.currentIndex);
  const nextTopic = currentTopicIdx !== currentTopicList.length - 1 ? currentTopicList[currentTopicIdx + 1] : null;

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
    <Card id="current-topic-panel">
      <div>
        <List disablePadding>
          <ListItem disablePadding sx={{ backgroundColor: "#A168FF", color: "#fff" }}>
            <ListItemButton>
              <ListItemText primary={currentTopic.name} />
            </ListItemButton>
          </ListItem>
        </List>
      </div>

      <div>
        <div>Next:</div>
        {nextTopic && <List disablePadding>
          <ListItem disablePadding onClick={() => onClickTopic(nextTopic)}>
            <ListItemButton>
              <ListItemText primary={nextTopic.name} />
            </ListItemButton>
          </ListItem>
        </List>}
      </div>

      <div>
        <div>All:</div>
        <List disablePadding>
          {currentTopicList.map((topic, i) => {
            const isActive = i === currentTopicIdx;
            return (<ListItem disablePadding sx={isActive ? { backgroundColor: "#A168FF", color: "#fff" } : {}} key={topic._id}
              onClick={() => onClickTopic(topic)}
            >
              <ListItemButton>
                <ListItemText primary={topic.name} />
              </ListItemButton>
            </ListItem>)
          })}
        </List>
      </div>
    </Card>
  </div>)
}

export default CurrentTopicList;