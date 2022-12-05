const App = () => {
  const handleFbLogin = () => {
    window.FB.login(result => {
      const params = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_token: result.authResponse.accessToken
        })
      }
      fetch('http://localhost:3000/api/auth/login/facebook', params)
        .then(response => response.json())
        .then(data => console.log({ data }))
        .catch(error => console.log({ error }))
    })
  }

  return (
    <div>
      FB Test<br />
      <button onClick={handleFbLogin}>Facebook</button>
    </div >
  );
}

export default App;
