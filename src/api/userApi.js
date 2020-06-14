const axios = require("axios");
export const loginUser = async (username, password) => {
  let url = "https://back-end-app.au-syd.cf.appdomain.cloud/login";
  console.log(username, password);
  let res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "Giang 3",
      password: "123",
    }),
  });

  axios
    .post(url, {
      username,
      password,
    })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const registerUser = async (phone, username, password, address) => {
  let url = "https://back-end-app.au-syd.cf.appdomain.cloud/register";
  console.log(phone, username, password, address, "from API");
  let res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ phone, username, password, address }),
  });
  if (res.ok) {
    console.log("registered and logged in");
    const { token } = await res.json();
    return token;
  }

  const errMsg = await res.text();
  throw new Error(errMsg);
};

let x = { observation: [{}], id: "iamash", type: "fall_detection" };
