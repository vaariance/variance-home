import Image from "next/image";

const WhySection = () => {
  return (
    <section className="site-section why-section">
      <div className="wrapper">
        <div className="why-section__group-1">
          <h2 className="site-section__caption">WHY?</h2>

          <div className="why-section__because">
            <h3 className="mb-8 text-lg font-bold">Because,</h3>

            <div className="text-cont flex flex-col gap-8 text-gray-400 lg:flex-row">
              <p>
                Mobile application usage accounts for up to 88% of digital media
                time.
              </p>
              <p>
                Web apps account for 29%, while Desktop apps, ssh, others,
                account for 4%
              </p>
            </div>
          </div>

          <div className="why-section__proportion">
            <h3 className="max-w-xs">
              A big proportion of the smartphone audience goes to mobile app
              users
            </h3>
            <p>70%</p>
          </div>
        </div>
        <div className="why-section__group-2">
          <h3>
            Hence, web3 and crypto can reach the next 1billion users in their
            comfort zone
          </h3>
          <figure className="img-cont">
            <Image
              src="/img/pie-chart.svg"
              alt="Why section graph"
              width={500}
              height={300}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
