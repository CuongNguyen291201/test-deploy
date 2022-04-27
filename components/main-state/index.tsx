import { WindowOutlined } from '@mui/icons-material'
import { Container, Grid, Link } from '@mui/material'
import CourseItem from '../course-item'
import './style.scss'

const state = ""

const MainState = () => {
  const goToExcercise = (value: String) => {
    let el = document.querySelector(`#${value}`)
    // el.setAttribute("style" ,  "position": "relative"; "top": "25px")
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
        <div className="course-by-topic" id="general-knowledge">
          General knowledge
          <div className="select-type">
            <select onChange={(e) => goToExcercise(e.target.value)}>
              {/* <option value="general-knowledge"><Link href="/alabama#general-knowledge" underline="none">General knowledge</Link></option>
              <option value="air-brakes"><Link href="/alabama#air-brakes" underline="none">Air Brakes</Link></option>
              <option value="double-and-triple-trailer-endorsement"><Link href="/alabama#double-and-triple-trailer-endorsement" underline="none">Double And Triple - Trailer Endorsement</Link></option>
              <option value="hazardous-materials-endorsement-hazmat"><Link href="/alabama#hazardous-materials-endorsement-hazmat" underline="none">Hazardous Materials Endorsement (HazMat)</Link></option>
              <option value="school-bus-endorsement"><Link href="/alabama#school-bus-endorsement" underline="none">School Bus Endorsement</Link></option>
              <option value="passenger-endorsement"><Link href="/alabama#passenger-endorsement" underline="none">Passenger Endorsement</Link></option>
              <option value="pre-trip-inspection"><Link href="/alabama#pre-trip-inspection" underline="none">Pre-trip Inspecti</Link></option>
              <option value="combination-vehicles"><Link href="/alabama#combination-vehicles" underline="none">Combination Vehicles</Link></option> */}
              <option value="general-knowledge">General knowledge</option>
              <option value="air-brakes">Air Brakes</option>
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
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem description=" " />
            </Grid>
          ))}
        </Grid>

        <div className="course-by-topic" id="air-brakes">Air Brakes</div>
        <Grid container spacing={4}>
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem description=" " />
            </Grid>
          ))}
        </Grid>

        <div className="course-by-topic" id="tanker-endorsement">Tanker Endorsement</div>
        <Grid container spacing={4}>
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem description=" " />
            </Grid>
          ))}
        </Grid>

        <div className="course-by-topic" id="double-and-triple-trailer-endorsement">Double And Triple - Trailer Endorsement</div>
        <Grid container spacing={4}>
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem description=" " />
            </Grid>
          ))}
        </Grid>

        <div className="course-by-topic" id="hazardous-materials-endorsement-hazmat">Hazardous Materials Endorsement (HazMat)</div>
        <Grid container spacing={4}>
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem description=" " />
            </Grid>
          ))}
        </Grid>

        <div className="course-by-topic" id="school-bus-endorsement">School Bus Endorsement</div>
        <Grid container spacing={4}>
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem description=" " />
            </Grid>
          ))}
        </Grid>

        <div className="course-by-topic" id="passenger-endorsement">Passenger Endorsement</div>
        <Grid container spacing={4}>
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem description=" " />
            </Grid>
          ))}
        </Grid>

        <div className="course-by-topic" id="pre-trip-inspection">Pre-trip Inspection</div>
        <Grid container spacing={4}>
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem description=" " />
            </Grid>
          ))}
        </Grid>

        <div className="course-by-topic" id="combination-vehicles">Combination Vehicles</div>
        <Grid container spacing={4}>
          {[1, 2, 3].map(item => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <CourseItem description=" " />
            </Grid>
          ))}
        </Grid>
      </Container >
    </div >
  )
}

export default MainState