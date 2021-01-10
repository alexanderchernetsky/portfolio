export class ApiBackendManager {
  // instance;
  //
  // constructor() {
  //   this.instance = axios.create({
  //     baseURL: process.env.REACT_APP_API_PATH_BACK
  //   });
  // }

  sendContactUsRequest = async () => {
    // eslint-disable-next-line no-return-await
    return await new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
      // throw new Error("Uncaught Exception!");
    });
  };
}

export default new ApiBackendManager();
