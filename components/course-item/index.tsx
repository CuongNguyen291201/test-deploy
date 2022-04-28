import { Link } from '@mui/material';
import Topic from '../../modules/share/model/topic';
import "./style.scss";

const CourseItem = (props: { item?: Topic, questions?: string, levels?: string }) => {
  const { item, questions, levels } = props;
  // const { shortDescription, slug, avatar } = item;

  // console.log('dd', item)

  return (
    <Link href={`/${item.slug}`} underline="none">
      <div id="test-item">
        <div className="test-img"><img src={item.avatar || "/assets/image/test-item.png"} /></div>
        <div className="test-content">
          <p className="test-name">{item.name || "CDL general knowledge practice test"}</p>
          <div className="test-desc" dangerouslySetInnerHTML={{ __html: item.shortDescription }}></div>
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