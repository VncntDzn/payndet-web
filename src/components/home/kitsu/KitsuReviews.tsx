import "react-tabs/style/react-tabs.css";

const KitsuReviews = ({ content }: { content: any }) => {
  return (
    <div className="my-5">
      {content.data.map((data, i) => (
        <p key={i} className="text-white my-3">
          <span className="text-yellow-300"> Comment No. {i}:</span>{" "}
          {data.attributes.content}
        </p>
      ))}
    </div>
  );
};

export default KitsuReviews;
