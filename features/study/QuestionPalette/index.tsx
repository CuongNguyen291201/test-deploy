import { useSelector } from "../../../app/hooks";
import "./style.scss";

const QuestionPalette = () => {
  const topic = useSelector((state) => state.topicState.currentTopic);
  return <div id="question-palette-panel">
    <div className="current-topic-label">{topic?.name}</div>
    <div className="question-palette-main">
      <div className="question-palette-header">
        <div className="question-palette-title">Question Palette</div>
        <div className="question-palette-nav"></div>
      </div>

      <div className="question-palette-body">
        <div className="questions-list"></div>
        <div className="questions-stat"></div>
      </div>

      <div className="question-palette-footer">
        
      </div>
    </div>
  </div>
}

export default QuestionPalette;