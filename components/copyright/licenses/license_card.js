import Content from "./license_card_content";
import Navigate from "./license_navigate";

const Card = ({ title, subtitle, content, url }) => {

    return (
        <div className="license_card container">
            <div className="columns">
                {/* <div className="column is-1"></div> */}
                <div className="column is-3">
                    <Navigate />
                </div >
                <div className="column">
                    <Content title={title} subtitle={subtitle} content={content} />
                </div>
            </div>
        </div>

    );
}

export default Card;
//https://bulma-divider.netlify.app/get-started/