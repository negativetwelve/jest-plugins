class User {

  constructor(props) {
    this.props = props;
  }

  getFirstName() {
    return this.props.firstName;
  }

  getLastName() {
    return this.props.lastName;
  }

  getName() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }

}


export default User;
