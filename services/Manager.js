import axios from "axios";

export class ApiBackendManager {
  sendContactUsRequest = async (
    fullName,
    email,
    message,
    recipientMail = "sashacherny@yandex.ru"
  ) => {
    const data = {
      recipientMail,
      fullName,
      senderMail: email,
      message
    };

    return axios({
      method: "post",
      url: "/api/contact",
      headers: {
        "Content-Type": "application/json"
      },
      data
    });
  };
}

export default new ApiBackendManager();
