import { Link } from '@mui/material';
import "./style.scss";

const CourseItem = (props: { name?: string, description?: string, questions?: string, levels?: string, link?: string, img?: string }) => {
  const { name, description, questions, levels, link, img } = props;

  return (
    <Link href={link || "#"} underline="none">
      <div id="test-item">
        <div className="test-img"><img src={img || "/assets/image/test-item.png"} /></div>
        <div className="test-content">
          <p className="test-name">{name || "CDL general knowledge practice test"}</p>
          <p className="test-desc">{description || "This section is taken by all applicants, about CDL rules & requirements, safe driving, safe transportation of cargo, pre-trip vehicle inspections."}</p>
          <div className="questions-levels">
            <div className="questions">
              <span className="quantity">{questions || "250+"}</span>
              <p className="desc">Questions</p>
            </div>
            <div className="levels">
              <span className="quantity">{levels || "14"}</span>
              <p className="desc">Levels</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseItem