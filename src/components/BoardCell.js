import "./BoardCell.css"

const BoardCell = ({cell}) => (
  <div className={`Boardcell ${cell.classname}`}>
    <div className="Sparkle">

    </div>
  </div>
)
export default BoardCell