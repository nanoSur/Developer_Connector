import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    bio: "",
    status: "",
    githubusername: "",
    skills: "",
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    twitter,
    facebook,
    instagram,
    linkedin,
    youtube,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <h1 className="large text-dark">Create your profile</h1>
      <p className="lead">
        <i className="fas fa-info-circle"></i> Add information to create your
        profile!
      </p>
      <small>* - required fields</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <select
            name="status"
            value={status}
            onChange={(e) => onChange(e)}
            required
          >
            <option value="0"> * Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="text-light">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group py-1">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small className="text-light">
            Could be your own company or one you are working for presently
          </small>
        </div>
        <div className="form-gorup py-1">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className="text-light">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-gorup py-1">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className="text-light">
            City & state suggested (eg. Bangalore, Karnataka)
          </small>
        </div>
        <div className="form-gorup py-1">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
            required
          />
          <small className="text-light">
            Please use comma seperated values (eg. HTML, CSS, Javascript, React)
          </small>
        </div>
        <div className="form-gorup py-1">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small className="text-light">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-gorup py-1">
          <textarea
            name="bio"
            placeholder="A short bio ofyourself"
            value={bio}
            onChange={(e) => onChange(e)}
          />
          <small className="text-light">
            Tell us something in not more than 300 words.
          </small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            className="btn btn-light"
            type="button"
          >
            Click to add Social Network Links
          </button>
          <span className="text-light">Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
                placeholder="Twitter URL"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
                placeholder="Youtube URL"
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
                placeholder="LinkedIn URL"
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
                placeholder="Instagram URL"
              />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
                placeholder="Facebook URL"
              />
            </div>
          </Fragment>
        )}

        <input type="Submit" className="btn btn-light my-1" />
        <Link to="/dashboard" className="btn btn-primary">
          Go back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
