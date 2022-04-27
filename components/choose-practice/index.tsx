import { Container, Grid, Link } from '@mui/material'
import topic from './topic.json'
import './style.scss'

const state = ""

const ChoosePractice = () => {
  return (
    <Container maxWidth="xl">
      <div id="choose-practice">
        <h2 className="title">It's time to ace your {state || "Alabama"} CDL practice test!!</h2>
        <Grid container spacing={2}>
          {topic.map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Link href="#" underline="none">
                <div className="topic-practice">
                  <img src={`/assets/icon/practice-topic-${index + 1}.png`} alt="" /> <span className="name">{item.name}</span>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}

export default ChoosePractice