import './Register.scss';

function Register(props) {
  console.log(props.setevent);
  return (
    <>
      <form action="/action_page.php">
        <div className="container">
          <h1>Student Register</h1>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr />
          <p>
            By creating an account you agree to our{' '}
            <a href="#">Terms and Privacy</a>.
          </p>

          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
