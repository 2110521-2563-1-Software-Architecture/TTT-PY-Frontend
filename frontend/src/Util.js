const Util = {
  login: async (username, password) => {
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/auth/login`;
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
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/auth/register`;
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
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/user`;
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
    });
    console.log(response);
    if (response.status == 400) return response.json();
    if (response.status == 200) return response.json();
  },
  getMyprofile: async () => {
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/user/`;
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

  getUser: async (username) => {
    if (!username) {
      return { err: "Invlid input" };
    }
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/user/search?username=${username}`;
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
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/friend`;
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
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/friend/add`;
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
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/chat/rooms`;
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
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/chat/room/${id}`;
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
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/chat/room`;
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
  deleteChatRoom: async (id) => {
    console.log(id);
    if (!id) return { err: "invalid input" };
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/chat/room/${id}`;
    const response = await fetch(URL, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(response.status);
    if (response.status == 201) return response.json();
    else return { err: response.message };
  },
  blockFriend: async (username) => {
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/friend/block`;
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
  unBlockFriend: async (username) => {
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/friend/unblock`;
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
  editMyProfile: async (firstName, lastName, email, img) => {
    let username = localStorage.getItem("user");
    const URL = `http://${process.env.REACT_APP_API_ENDPOINT}/user/`;
    const response = await fetch(URL, {
      method: "PATCH",
      // params: JSON.stringify({username}),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ firstName, lastName, email, img }),
    });
    console.log(response);
    if (response.status == 200) return response.json();
    else {
      return { err: response.message };
    }
  },
};

export default Util;
