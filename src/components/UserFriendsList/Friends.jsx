import "./Friends.css";
import PropTypes from "prop-types";

const FriendsList = ({ friends }) => {
  return (
    <div className="friends">
      <ul className="friends-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className="friend-item" key={id}>
            <span className={`status ${isOnline}`}>{isOnline}</span>
            <img
              className="friends-avatar"
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
