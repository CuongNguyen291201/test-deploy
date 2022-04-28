import { Container, Grid, Link } from '@mui/material'
import { useSelector } from '../../app/hooks'
import CourseItem from '../course-item'
import './style.scss'

const state = ""

const MainState = () => {
  const stateAlabama = useSelector((state) => state.topicState.topicByParentId);
  
  const goToExcercise = (value: String) => {
    let el = document.querySelector(`#${value}`)
    el.scrollIntoView(true)
  }

  return (
    <div id="main-state">
      <Container maxWidth="xl">
        <h2 className="title">Be fully prepared with {state || "Alabama"} CDL full test now!!</h2>
        <div className="topic">
          <div className="topic-item topic-1">All</div>
          <div className="topic-item topic-2">Combination</div>
          <div className="topic-item topic-3">Straight truck</div>
          <div className="topic-item topic-4">Heavy equipment</div>
          <div className="topic-item topic-5">School bus</div>
          <div className="topic-item topic-6">Coach/Transit bus</div>
          <div className="topic-item topic-7">Service truck</div>
          <div className="topic-item topic-8">Concrete mixer</div>
          <div className="topic-item topic-9">Dump truck</div>
        </div>
        <div id="general-knowledgr">
          <div className="course-by-topic">
            General knowledge
            <div className="select-type">
              <select onChange={(e) => goToExcercise(e.target.value)}>
                <option value="general-knowledge">General knowledge</option>
                <option value="air-brakes">Air Brakes</option>
                <option value="tanker-endorsement">Tanker Endorsement</option>
                <option value="double-and-triple-trailer-endorsement">Double And Triple - Trailer Endorsement</option>
                <option value="hazardous-materials-endorsement-hazmat">Hazardous Materials Endorsement (HazMat)</option>
                <option value="school-bus-endorsement">School Bus Endorsement</option>
                <option value="passenger-endorsement">Passenger Endorsement</option>
                <option value="pre-trip-inspection">Pre-trip Inspecti</option>
                <option value="combination-vehicles">Combination Vehicles</option>
              </select>
            </div>
          </div>
          <Grid container spacing={4}>
            {stateAlabama.slice(0,3).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="air-brakes">
          <div className="course-by-topic">Air Brakes</div>
          <Grid container spacing={4}>
            {stateAlabama.slice(0,3).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="tanker-endorsement">
          <div className="course-by-topic">Tanker Endorsement</div>
          <Grid container spacing={4}>
            {stateAlabama.slice(0,3).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="double-and-triple-trailer-endorsement">
          <div className="course-by-topic">Double And Triple - Trailer Endorsement</div>
          <Grid container spacing={4}>
            {stateAlabama.slice(0,3).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="hazardous-materials-endorsement-hazmat">
          <div className="course-by-topic">Hazardous Materials Endorsement (HazMat)</div>
          <Grid container spacing={4}>
            {stateAlabama.slice(0,3).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="school-bus-endorsement">
          <div className="course-by-topic">School Bus Endorsement</div>
          <Grid container spacing={4}>
            {stateAlabama.slice(0,3).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="passenger-endorsement">
          <div className="course-by-topic">Passenger Endorsement</div>
          <Grid container spacing={4}>
            {stateAlabama.slice(0,3).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="pre-trip-inspection">
          <div className="course-by-topic">Pre-trip Inspection</div>
          <Grid container spacing={4}>
            {stateAlabama.slice(0,3).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div id="combination-vehicles">
          <div className="course-by-topic">Combination Vehicles</div>
          <Grid container spacing={4}>
            {stateAlabama.slice(0,3).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CourseItem item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container >
    </div >
  )
}

export default MainState