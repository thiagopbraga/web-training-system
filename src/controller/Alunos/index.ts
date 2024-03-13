const GetAlunos = async (email: string, pass: string) => {
  const API_URL = process.env.API_URL || 'http://localhost:3000/api';
  console.log('API_URL', API_URL);
  const response = await fetch(`${API_URL}/login`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  return response;
};

export const AlunosController = {
  GetAlunos,
};
