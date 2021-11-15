import "react-tabs/style/react-tabs.css";
import moment from "moment";

const KitsuDetails = ({ content }: { content: any }) => {
  return (
    <div className="my-5">
      <p className="text-white text-justify">
        <span className=" text-yellow-300">Titles: </span>
        {content.attributes.titles.en_jp}, {content.attributes.titles.ja_jp}
      </p>
      <p className="text-white text-justify">
        <span className=" text-yellow-300">Titles: </span>
        {content.attributes.showType}
      </p>
      <p className="text-white text-justify">
        <span className=" text-yellow-300">Age Rating: </span>
        {content.attributes.ageRating}
      </p>
      <p className="text-white text-justify">
        <span className=" text-yellow-300">No. of Episodes: </span>
        {content.attributes.episodeCount}
      </p>
      <p className="text-white text-justify">
        <span className=" text-yellow-300">Created Date: </span>
        {moment(content.attributes.createdAt).format("MMMM DD, YYYY")}
      </p>

      <p className="text-white text-justify">
        <span className=" text-yellow-300">Updated Date: </span>
        {moment(content.attributes.updatedAt).format("MMMM DD, YYYY")}
      </p>

      <p className="text-white text-justify">
        <span className=" text-yellow-300">Synopsis: </span>
        {content.attributes.synopsis}
      </p>
    </div>
  );
};

export default KitsuDetails;
