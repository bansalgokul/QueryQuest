const Login = () => {
  const loginGoogle = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const loginGithub = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  return (
    <div>
      <button onClick={loginGoogle}>Login with Google</button>
      <button onClick={loginGithub}>Login with Github</button>
    </div>
  );
};

export default Login;
