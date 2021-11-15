import "react-tabs/style/react-tabs.css";
import { AttributesProps } from "../types";

const KitsuReviews = ({ content }: { content: any }) => {
  return (
    <div className="my-5">
      {content.data.map(({ attributes, id }: AttributesProps) => (
        <p key={id} className="text-white my-3">
          <span className="text-yellow-300"> Comment:</span>{" "}
          {attributes.content}
        </p>
      ))}
    </div>
  );
};

export default KitsuReviews;
