import { LinearProgress } from "@mui/material";
import { withStyles } from "@mui/styles";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useDispatch, useSelector } from "../../../app/hooks";
import { ROUTER_STUDY } from "../../../app/router";
import Topic from "../../../modules/share/model/topic";
import { setTopicLoading } from "../topic.slice";
import "./style.scss";

const ScrollContainer = dynamic(() => import("../../common/ScrollContainer"), { ssr: false });

const SubTopicList = () => {
  const subTopicList = useSelector((state) => state.topicState.subList);
  const subTopic = useSelector((state) => state.topicState.subTopic);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      scroller.scrollTo(subTopic?._id, {
        containerId: "sub-topic-list",
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }, 500);
  }, [subTopic?._id]);

  const onClickTopic = (item: Topic) => {
    if (item._id === subTopic._id) return;
    const slugs = router.query.slugs as string[];
    const slug = `/${ROUTER_STUDY}/${[...slugs.slice(0, -2), item.slug].join("/")}`;
    dispatch(setTopicLoading(true));
    router.push(`${ROUTER_STUDY}/[...slugs]`, slug);
  }

  const TopicProgress = withStyles(() => ({
    root: { backgroundColor: "#D1D3DA" },
    barColorPrimary: { backgroundColor: "#4CAF50" }
  }))(LinearProgress);

  return (<ScrollContainer thumbSize={50} style={{ height: "80vh" }} id="sub-topic-list">
    {subTopicList.map((topic, i) => {
      const isActive = topic._id === subTopic._id;
      return (<div
        key={topic._id}
        id={topic._id}
        className={classNames("sub-topic-item", isActive ? "sub-active" : "")}
        onClick={() => onClickTopic(topic)}
      >
        <div className="dot-2">{topic.name}</div>
        <div className="sub-topic-progress">
          <TopicProgress
            color="primary"
            variant="determinate"
            value={subTopic?.topicProgress?.progress || 0}
          />
        </div>
      </div>)
    })}
  </ScrollContainer>)
}

export default SubTopicList;