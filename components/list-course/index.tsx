import { Container, Grid } from '@mui/material'
import { useSelector } from '../../app/hooks';
import CourseItem from '../course-item';
import "./style.scss";

const ListCourse = (props: { titleH2?: string, desc?: string }) => {
  const { titleH2, desc } = props;
  const stateAlabama = useSelector((state) => state.topicState.topicByParentId);

  return (
    <div id="test-list">
      <Container maxWidth="xl">
        <div className="text-seo">
          <h2 className="title-h2">{titleH2 || "Begin your CDL practice test journey now!"}</h2>
          <p className="desc">{desc || "Our website will furnish you with opportunities to get to know the " + <strong>"CDL"</strong> + "test and practice with the same format and questions as in the actual written examination."}</p>
        </div>
        <Grid container spacing={4}>
          {stateAlabama.slice(0,3).map(item => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <CourseItem item={item} />
            </Grid>
          ))}
        </Grid>
        <div className="banner-practice">
          <img src="/assets/image/bg-tests-practice.png" />
        </div>
        <Grid container spacing={4}>
          {stateAlabama.slice(3,9).map(item => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <CourseItem item={item}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default ListCourse