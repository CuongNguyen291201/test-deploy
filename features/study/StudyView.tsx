import { Container, Grid } from "@mui/material";
import { useSelector } from "../../app/hooks";
import "./studyView.scss";

const StudyView = () => {
  const { rootTopic } = useSelector((state) => state.topicState);
  return (<div id="main-learn-view">
    <Container maxWidth="xxl">
      <h1 className="root-topic-name">{rootTopic.name}</h1>
      <Grid container spacing={1}>
        {/* Question Palette */}
        <Grid item xs={12} md={3}>
          Question Palette

          <div>
            Exercise 1
          </div>
        </Grid>

        {/* Game */}
        <Grid item xs={12} md={6}>
          Game
        </Grid>

        {/* Relative Subjects */}
        <Grid item xs={12} md={3}>
          Subjects
        </Grid>
      </Grid>
    </Container>
  </div>)
}

export default StudyView;