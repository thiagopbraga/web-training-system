const LoginController = async (email: string, pass: string) => {
  const API_URL = process.env.API_URL || 'http://localhost:3000/api';
  console.log('API_URL', API_URL);
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, pass }),
  });
  console.log(response);
  return response;
};

export default LoginController;
