import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "../../app/hooks";
import LoadingContainer from "../common/LoadingContainer";
import CurrentTopicList from "./CurrentTopicList";
import QuestionPalette from "./QuestionPalette";
import "./studyView.scss";
import SubTopicList from "./SubTopicList";

const StudyView = () => {
  const { rootTopic, subTopic, loading } = useSelector((state) => state.topicState);
  const { loading: authLoading } = useSelector((state) => state.authState);

  return <LoadingContainer loading={loading || authLoading} useDelay>
    <div id="main-study-view">
      <Container maxWidth="xl_game">
        <h1 className="root-topic-name">{`${rootTopic?.name}${subTopic ? `: ${subTopic?.name}` : ''}`}</h1>
        <Grid container spacing={1}>
          {/* Question Palette */}
          <Grid item xs={12} md={3}>
            <QuestionPalette />
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