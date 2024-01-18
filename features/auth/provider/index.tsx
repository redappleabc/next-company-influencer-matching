import axios from "axios";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  let data = null,
    error = null;

  try {
    const result = await axios.post(`/api/auth`, { id: email, password });
    data = result.data;
    localStorage.setItem("user", JSON.stringify(data.data));
  } catch (e) {
    error = e;
  }
  return { data, error };
}
