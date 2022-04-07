import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { useDispatch, useSelector } from "../../../app/hooks";
import { ROUTER_STUDY } from "../../../app/router";
import Topic from "../../../modules/share/model/topic";
import ScrollContainer from "../../common/ScrollContainer";
import { setTopicLoading } from "../topic.slice";
import "./style.scss";

const SubTopicList = () => {
  const subTopicList = useSelector((state) => state.topicState.subList);
  const subTopic = useSelector((state) => state.topicState.subTopic);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    scroller.scrollTo(subTopic?._id, {
      containerId: "sub-topic-list",
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, []);

  const onClickTopic = (item: Topic) => {
    if (item._id === subTopic._id) return;
    const slugs = router.query.slugs as string[];
    const slug = `/${ROUTER_STUDY}/${[...slugs.slice(0, -2), item.slug].join("/")}`;
    dispatch(setTopicLoading(true));
    router.push(`${ROUTER_STUDY}/[...slugs]`, slug);
  }

  return (<ScrollContainer thumbSize={50} style={{ height: "80vh" }} id="sub-topic-list">
    {subTopicList.map((topic, i) => {
      const isActive = topic._id === subTopic._id;
      return (<div
        id={topic._id}
        key={topic._id}
        className={classNames("sub-topic-item", isActive ? "sub-active" : "")}
        onClick={() => onClickTopic(topic)}
      >
        {topic.name}
      </div>)
    })}
  </ScrollContainer>)
}

export default SubTopicList;