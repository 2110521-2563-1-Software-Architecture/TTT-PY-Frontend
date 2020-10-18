const Util = {
  login: async (username, password) => {
    const URL = `http://localhost:8081/auth/login`;
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response.status);
    return response.json();
    // if (response.status == 500) return response.json();
    // if (response.status == 200) return response.json();
  },

  register: async (
    username,
    email,
    password
  ) => {
    const URL = `http://localhost:8081/auth/register`;
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
    console.log("username ",username)
    console.log(response)
    console.log(response.body);
    if (response.status == 400) return response.json();
    if (response.status == 200) return response.json();
  },

  getAllUser:async () => {
    const URL = `http://localhost:8081/user`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      });
    console.log(response);
    if (response.status == 400) return response.json();
    if (response.status == 200) return response.json();
  },

  getUser:async (username) => {
    const URL = `http://localhost:8081/user/search?username=${username}`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      });
    console.log(response);
    if (response.status == 400) return response.json();
    if (response.status == 200) return response.json();
  },

  getFriend: async () => {
    const URL = `http://localhost:8081/friend`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      });
    console.log(response);
    if (response.status == 400) return response.json();
    if (response.status == 200) return response.json();

  },

  addFriend: async(username) => {
    const URL = `http://localhost:8081/friend/add`
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username}),
    });
    console.log(response.status);
    if (response.status == 500) return response.json();
    if (response.status == 200) return response.json();
  }

};

export default Util;