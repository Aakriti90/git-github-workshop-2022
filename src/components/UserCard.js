import React from "react";
import "../css/UserCard.css";
import { SocialIcon } from "react-social-icons";

const UserCard = ({ participant }) => {
  return (
    <div className="card">
      <div className="card-title">{participant.name}</div>
      <div className="card-body">
        <p>📝 {participant.faculty}</p>
        <p>📅 Batch of {participant.batch}</p>
        <p>✏️ {participant.bio}</p>
        <p>📧 {participant.email}</p>
        <SocialIcon
          url={
            participant.githubProjectUrl
              ? participant.githubProjectUrl
              : "https://github.com"
          }
          style={{ height: 25, width: 25, marginLeft: -2 }}
        />
        <a
          href={participant.githubProjectUrl}
          style={{ marginLeft: 4 }}
          target="_blank"
          rel="noreferrer"
        >
          Repository Link
        </a>
      </div>
    </div>
  );
};

export default UserCard;
