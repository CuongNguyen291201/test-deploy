import { Container, Grid, Theme, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../app/hooks";
import LoadingContainer from "../common/LoadingContainer";
import CurrentTopicList from "./CurrentTopicList";
import "./studyView.scss";
import SubTopicList from "./SubTopicList";
import { fetchTopicsList } from "./topic.slice";

const StudyView = () => {
  const { rootTopic, subList, subTopic, currentTopic, currentList, loading } = useSelector((state) => state.topicState);
  const dispatch = useDispatch();
  const isDownBreakpoint = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    if (!loading) {
      if (currentTopic) {
        dispatch(fetchTopicsList({ courseId: currentTopic.courseId, parentId: currentTopic.parentId, target: "current" }));
      }
      if (subTopic) {
        dispatch(fetchTopicsList({ courseId: subTopic.courseId, parentId: subTopic.parentId, target: "sub" }));
      }
    }
  }, [loading]);

  return <LoadingContainer loading={loading} useDelay>
    <div id="main-learn-view">
      <Container maxWidth="xxl">
        <h1 className="root-topic-name">{`${rootTopic.name}${subTopic ? `: ${subTopic.name}` : ''}`}</h1>
        <Grid container spacing={1}>
          {/* Question Palette */}
          <Grid item xs={12} md={3}>
            <div>Question Palette</div>
            <div hidden={isDownBreakpoint}>
              <CurrentTopicList />
            </div>
          </Grid>

          {/* Game */}
          <Grid item xs={12} md={6}>
            Game
          </Grid>

          {isDownBreakpoint && <Grid item xs={12} md={3}>
            <CurrentTopicList />
          </Grid>}
          {/* Relative Subjects */}
          <Grid item xs={12} md={3}>
            <SubTopicList />
          </Grid>

        </Grid>
      </Container>
    </div>
  </LoadingContainer>
}

export default StudyView;