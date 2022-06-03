import Heading from "../items/heading";

const Fonts = () => {
    return (
        <div className="fonts" id="fonts">
            <div className="box">
                <Heading heading="Fonts" subheading="An overview over the Fonts used in this Project" />

                <h3 className="has-text-weight-semibold is-size-3 is-family-primary">Rubik</h3>
                <h4 className="=is-size-4 is-family-secondary">Title Font</h4>

                <h3 className="has-text-weight-semibold is-size-3 is-family-secondary">Raleway</h3>
                <h4 className="=is-size-4 is-family-secondary">Subtitle Font</h4>

                <h3 className="has-text-weight-semibold is-size-3 is-family-third">Hind Vadodara</h3>
                <h4 className="=is-size-4 is-family-secondary">Body Font</h4>
            </div>
            <br />
        </div>
    );
}

export default Fonts;
