import { Container, Grid } from '@mui/material'
import CourseItem from '../course-item';
import "./style.scss";

const ListCourse = () => {
  return (
    <div id="test-list">
      <Container maxWidth="xl">
        <div className="text-seo">
          <h2 className="title-h2">Begin your CDL practice test journey now!</h2>
          <p className="desc">Our website will furnish you with opportunities to get to know the <strong>CDL</strong> test and practice with the same format and questions as in the actual written examination.</p>
        </div>
        <Grid container spacing={4}>
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem />
            </Grid>
          ))}
        </Grid>
        <div className="banner-practice">
          <img src="/assets/image/bg-tests-practice.png" />
        </div>
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default ListCourse