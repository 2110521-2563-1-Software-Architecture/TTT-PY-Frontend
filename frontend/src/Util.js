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

  register: async (username, email, password, recaptchaResponse) => {
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
        password,
        recaptchaResponse,
      }),
    });
    if (response.status == 400) return response.json();
    if (response.status == 200) return response.json();
  },

  getAllUser: async () => {
    const URL = `http://localhost:8081/user`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
    });
    console.log(response);
    if (response.status == 400) return response.json();
    if (response.status == 200) return response.json();
  },

  getUser: async (username) => {
    if (!username) {
      return { err: "Invlid input" };
    }
    const URL = `http://localhost:8081/user/search?username=${username}`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(response);
    if (response.status == 200) return response.json();
    else {
      return { err: response.message };
    }
  },

  getFriend: async () => {
    const URL = `http://localhost:8081/friend`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(response);
    if (response.status == 400) return response.json();
    if (response.status == 200) return response.json();
    else return { err: response.message };
  },

  addFriend: async (username) => {
    const URL = `http://localhost:8081/friend/add`;
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ username }),
    });
    console.log(response.status);
    if (response.status == 500) return response.json();
    if (response.status == 200) return response.json();
  },
  getChatRooms: async () => {
    const URL = `http://localhost:8081/chat/rooms`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    if (response.status == 200) return response.json();
    else return { err: response.message };
  },
  getChatRoomByID: async (id) => {
    console.log(id);
    if (!id) return { err: "invalid input" }; //Please Edit Here
    const URL = `http://localhost:8081/chat/room/${id}`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    if (response.status == 200) return response.json();
    else return { err: response.message };
  },
  createChatroom: async (username) => {
    const URL = `http://localhost:8081/chat/room`;
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ username }),
    });
    console.log(response.status);
    if (response.status == 201) return response.json();
    else return { err: response.message };
  },
};

export default Util;
