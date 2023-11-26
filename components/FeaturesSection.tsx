const FeaturesSection = ({
  featureList,
}: {
  featureList: {
    title: string;
    description: string[];
  }[];
}) => {
  return (
    <section className="site-section features-section">
      <div className="wrapper">
        <ul className="feature-list">
          {featureList.map((feature) => (
            <li className="feature-list__item" key={feature.title}>
              <div className="feature-list__item-header">
                <h3 className="feature-list__item-title">{feature.title}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="163"
                  height="163"
                  viewBox="0 0 163 163"
                  fill="none"
                >
                  <circle
                    cx="81.1025"
                    cy="81.1025"
                    r="80.5"
                    transform="rotate(-0.0734336 81.1025 81.1025)"
                    fill="#5E5E5E"
                    stroke="white"
                    strokeDasharray="10 10"
                  />
                </svg>
              </div>
              <div className="feature-list__content">
                <p>{feature.description[0]}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1"
                  height="192"
                  viewBox="0 0 1 192"
                  fill="none"
                >
                  <path
                    d="M0.5 0.5V191.5"
                    stroke="white"
                    strokeDasharray="10 10"
                  />
                </svg>
                <p>{feature.description[1]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
