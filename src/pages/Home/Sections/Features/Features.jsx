import FeaturesElement from "./FeaturesElement/FeaturesElement";
export const Features = () => {
  return (
    <section className="features">
      <h2 className="features__title title">
        Our <span>Features</span>
      </h2>
      <p className="features__text desc">
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <FeaturesElement></FeaturesElement>
      <a href="/features-link" className="features__link">
        See more features
      </a>
    </section>
  );
};
