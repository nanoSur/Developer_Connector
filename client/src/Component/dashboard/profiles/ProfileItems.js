import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItems = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className="profile bg-dark">
      <img src={avatar} className="round-img" />
      <div>
        <h2 className="text-dark">{name}</h2>
        <p>
          {" "}
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to="{`/profile/${_id}`}" className="btn btn-primary ">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="test-dark">
            <i className="fa fa-check"></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItems.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItems;
