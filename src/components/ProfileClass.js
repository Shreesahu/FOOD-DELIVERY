import {Component} from "react";
import UserCard from './UserCard'; // Import the UserCard component

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users");
    const dataJson = await data.json();

    this.setState({ users: dataJson });
  }

  render() {
    const { users } = this.state;

    return (
      <div className="profile-Component">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Profile;