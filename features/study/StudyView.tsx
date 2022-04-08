import { Container, Grid, Theme, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../app/hooks";
import LoadingContainer from "../common/LoadingContainer";
import CurrentTopicList from "./CurrentTopicList";
import "./studyView.scss";
import SubTopicList from "./SubTopicList";
import { fetchTopicsList } from "./topic.slice";

const StudyView = () => {
  const { rootTopic, subTopic, currentTopic, loading } = useSelector((state) => state.topicState);
  const { loading: authLoading, userId } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !authLoading) {
      if (currentTopic) {
        dispatch(fetchTopicsList({ courseId: currentTopic.courseId, parentId: currentTopic.parentId, target: "current", userId }));
      }
      if (subTopic) {
        dispatch(fetchTopicsList({ courseId: subTopic.courseId, parentId: subTopic.parentId, target: "sub", userId }));
      }
    }
  }, [loading, authLoading, userId]);

  return <LoadingContainer loading={loading || authLoading} useDelay>
    <div id="main-study-view">
      <Container maxWidth="xl">
        <h1 className="root-topic-name">{`${rootTopic?.name}${subTopic ? `: ${subTopic?.name}` : ''}`}</h1>
        <Grid container spacing={1}>
          {/* Question Palette */}
          <Grid item xs={12} md={3}>
            <div>Question Palette</div>
            <CurrentTopicList />
          </Grid>

          {/* Game */}
          <Grid item xs={12} md={6}>
            Game
          </Grid>

          {/* Subjects */}
          <Grid item xs={12} md={3}>
            <SubTopicList />
          </Grid>

        </Grid>
      </Container>
    </div>
  </LoadingContainer>
}

export default StudyView;