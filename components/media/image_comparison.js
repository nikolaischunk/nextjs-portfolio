import { image_formats } from "../../db/image_formats";
import Common_card from "./common_card";

const Image_comparison = () => {
  return (
    <div className="Image_comparison mt-3">
      <div className="columns">
        {image_formats.map((format) => generateCard(format))}
      </div>
    </div>
  );
};

function generateCard(format) {
  return (
    <div className="column is-4">
      <Common_card
        type="image"
        name={format.name}
        tag="high detail"
        description={format.description}
        path={format.path}
        format={format.format}
        size={format.size}
        pro={format.pro}
        contra={format.contra}
      />
    </div>
  );
}

export default Image_comparison;
