const Util = {
  login: async (email, password) => {
    const URL = `http://localhost:3000/login2`;
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response.status);
    if (response.status == 500) return response.json();
    if (response.status == 200) return response.json();
  },

  register: async (
    username,
    email,
    password
  ) => {
    const URL = `http://localhost:3000/home2`;
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password
      }),
    });
    console.log(response);
    if (response.status == 400) return response.json();
    if (response.status == 200) return response.json();
  },

};

export default Util;