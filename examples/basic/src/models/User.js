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

  sayHello() {
    console.log('Hello');
  }

  sayHelloWithName() {
    console.log(`Hello my name is ${this.getName()}!`);
  }

}


export default User;
