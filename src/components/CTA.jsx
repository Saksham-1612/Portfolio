import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section>
      <div className="cta">
        <p className="cta-text">
          Have a project in mind?
          <br className="sm:block hidden" />
          Let's build something together!
        </p>
        <Link to="/contacts" className="btn">
          Contact
        </Link>
      </div>
      <div className="flex justify-center items-center mt-12 space-x-12">
        {socialLinks.map((socialLink) => (
          <div key={socialLink.name}>
            <Link
              to={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 h-10 object-contain cursor-pointer"
                src={socialLink.iconUrl}
                alt={socialLink.name || "Link"}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;
