import axios, { type AxiosResponse } from 'axios';

interface ContactUsRequest {
    recipientMail: string;
    fullName: string;
    senderMail: string;
    message: string;
}

interface ContactUsParams {
    fullName: string;
    email: string;
    message: string;
    recipientMail?: string;
}

class ApiManager {
    // todo: change email to gmail and move it to .env
    private readonly defaultRecipientMail = 'sashacherny@yandex.ru';

    sendContactUsRequest = async ({
                                      fullName,
                                      email,
                                      message,
                                      recipientMail = this.defaultRecipientMail
                                  }: ContactUsParams): Promise<AxiosResponse> => {
        const data: ContactUsRequest = {
            recipientMail,
            fullName,
            senderMail: email,
            message
        };

        return axios.post<ContactUsRequest>('/api/contact', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
}

let apiManagerInstance: ApiManager | null = null;

const getApiManagerInstance = () => {
    if (apiManagerInstance) {
        return apiManagerInstance;
    } else {
        apiManagerInstance = new ApiManager();
        return apiManagerInstance;
    }
}

export default getApiManagerInstance();
