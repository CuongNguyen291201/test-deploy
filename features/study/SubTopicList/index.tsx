import { Card, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "../../../app/hooks";
import { ROUTER_STUDY } from "../../../app/router";
import Topic from "../../../modules/share/model/topic";
import { setCurrentTopic, setCurrentTopicIndex, setTopicLoading } from "../topic.slice";

const SubTopicList = () => {
  const subTopicList = useSelector((state) => state.topicState.subList);
  const subTopic = useSelector((state) => state.topicState.subTopic);
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickTopic = (item: Topic) => {
    if (item._id === subTopic._id) return;
    const slugs = router.query.slugs as string[];
    const slug = `/${ROUTER_STUDY}/${[...slugs.slice(0, -2), item.slug].join("/")}`;
    dispatch(setTopicLoading(true));
    router.push(`${ROUTER_STUDY}/[...slugs]`, slug);
  }

  return (<div id="sub-topic-list">
    <Card id="sub-topic-panel">
      <div>
        <List disablePadding>
          {subTopicList.map((topic, i) => {
            const isActive = topic._id === subTopic._id;
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

export default SubTopicList;