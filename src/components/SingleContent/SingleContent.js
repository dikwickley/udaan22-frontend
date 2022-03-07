import { Badge } from "@material-ui/core";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  data,
  id,
  poster,
  title,
  date,
  tagline,
  media_type,
  department,
  vote_average,
}) => {
  console.log()
  return (
    <ContentModal data={data} media_type={media_type} id={id}>
      <Badge   
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        // src={poster ? `${img_300}${poster}` : unavailable}
        src={poster}
        alt={title}
        style={{width:"300px",height:"300px"}}
      />
      <span className="title">{title}</span>
      <span className="subTitle" >{data.tagline}</span>
      <span className="subTitle"></span>
    </ContentModal>
  );
};

export default SingleContent;
