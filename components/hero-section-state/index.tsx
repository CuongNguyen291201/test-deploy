import { Container } from '@mui/material';
import './style.scss'

const state = "";

const HeroSectionState = () => {

  return (
    <div id="hero-section-state">
      <h1 className="title-h1">Let's master {state || "Alabama"} CDL practice test today!!</h1>
      <Container maxWidth="xl">
        <div className="summary">
          All the AL <strong>CDL</strong> practice tests are designed based on the <strong>{state || "Alabama"} CDL</strong> Permit Manual 2022 with 9 different sections including General Knowledge, Air Brakes, Combination, Doubles & Triples, Tanker, Hazardous Material, Passenger, and School Bus, and Pre-trip Inspection.
        </div>
        <div className="choose-state">Change Your State <i className="fas fa-caret-down"></i></div>
      </Container>
    </div>
  )
}

export default HeroSectionState