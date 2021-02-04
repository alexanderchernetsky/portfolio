import Head from "next/head";
import styled from "styled-components";
import React, { useEffect, useReducer } from "react";
import Layout from "../../components/common/Layout";
import {
  Heading,
  PageTitleWrapper,
  Stripe
} from "../../styled-components/PageTitle";
import ax from "../../styled-components/accessor";
import { customMedia } from "../../styled-components/customMedia";
import InputComponent from "../../components/specific/contact/Input";
import TextareaComponent from "../../components/specific/contact/Textarea";
import ModalComponent from "../../components/specific/contact/Modal";
import checkForEmptyField from "../../utils/validation/checkForEmptyField";
import validateEmail from "../../utils/validation/validateEmail";
import ButtonComponent from "../../components/common/Button";
import getFieldsErrors from "../../utils/getFieldsErrors";
import BackendManager from "../../services/Manager";
import socIcons from "../../constants/contact";
import SocIconComponent from "../../components/specific/contact/SocIconComponent";

const ContactPageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${ax("contact-page-bg")};
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding-top: 30px;
  ${customMedia.lessThan("desktop")`
    padding: 20px 20px 80px;
    width: 90%;
  `};
  ${customMedia.lessThan("mobile")`
    padding: 10px 10px 80px;
  `};
`;

const Question = styled.div`
  font-weight: 600;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
  color: ${ax("contact-question-color")};
  margin-top: 80px;
  ${customMedia.lessThan("desktop")`
    margin-top: 20px;
    font-size: 16px;
    text-align: center;
  `};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 786px;
  background-color: ${ax("form-bg-color")};
  box-sizing: border-box;
  padding: 20px 50px 30px;
  ${customMedia.lessThan("desktop")`
     padding: 0 20px;
  `};
`;

const RowWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  ${customMedia.lessThan("desktop")`
     margin-top: 0;
  `};
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${customMedia.lessThan("desktop")`
     margin-top: 0;
     margin-bottom: 50px; // otherwise submit btn might be hidden under footer on small screen devices
  `};
`;

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${ax("footer-bg")};
  padding: 50px 0 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${customMedia.lessThan("desktop")`
     padding: 15px 0;
  `};
`;

const SocIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footnote = styled.div`
  margin-top: 35px;
  opacity: 0.6;
  ${customMedia.lessThan("desktop")`
     margin-top: 5px;
  `};
`;

const Name = styled.span`
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  color: ${ax("footnote-color")};
  font-size: 14px;
`;

const Year = styled.span`
  color: ${ax("highlight-color")};
  font-size: 16px;
`;

const initialState = {
  fullName: "",
  fullNameError: false,
  email: "",
  emailError: false,
  message: "",
  messageError: false,
  isSubmitting: false,
  isSuccessModalVisible: false,
  isErrorModalVisible: false
};

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    case "trigger_success":
      return {
        ...state,
        isSuccessModalVisible: action.payload
      };
    case "trigger_error":
      return {
        ...state,
        isErrorModalVisible: action.payload
      };
    case "reset_form":
      return initialState;
    default:
      return state;
  }
};

const Contacts = () => {
  const [state, dispatch] = useReducer(contactFormReducer, initialState);
  const {
    fullName,
    fullNameError,
    email,
    emailError,
    message,
    messageError,
    isSubmitting,
    isSuccessModalVisible,
    isErrorModalVisible
  } = state;

  useEffect(() => {
    const fieldErrors = [fullNameError, emailError, messageError];
    const hasError = !!fieldErrors.filter(Boolean).length;
    if (!hasError && isSubmitting) {
      // eslint-disable-next-line no-undef
      const formData = new FormData();
      const fields = new Map([
        ["fullName", fullName],
        ["email", email],
        ["message", message]
      ]);
      fields.forEach((value, key) => {
        formData.append(key, value);
      });

      BackendManager.sendContactUsRequest(formData)
        .then(() => {
          dispatch({
            type: "trigger_success",
            payload: true
          });
        })
        .catch(error => {
          getFieldsErrors(error).forEach(fieldErrorItem => {
            dispatch({
              type: "field",
              fieldName: `${fieldErrorItem[0]}Error`,
              payload: fieldErrorItem[1]
            });
          });
          dispatch({
            type: "trigger_error",
            payload: true
          });
        })
        .finally(() => {
          dispatch({
            type: "field",
            fieldName: "isSubmitting",
            payload: false
          });
        });
    } else {
      dispatch({
        type: "field",
        fieldName: "isSubmitting",
        payload: false
      });
    }
  }, [isSubmitting]);

  const handleSubmit = event => {
    event.preventDefault();
    // check if fields are filled and values are valid
    dispatch({
      type: "field",
      fieldName: "fullNameError",
      payload: checkForEmptyField(fullName)
    });
    dispatch({
      type: "field",
      fieldName: "emailError",
      payload: checkForEmptyField(email) || validateEmail(email)
    });
    dispatch({
      type: "field",
      fieldName: "messageError",
      payload: checkForEmptyField(message)
    });
    dispatch({
      type: "field",
      fieldName: "isSubmitting",
      payload: true
    });
  };

  const inputChangeHandler = (fieldTitle, event) => {
    dispatch({
      type: "field",
      fieldName: fieldTitle,
      payload: event.target.value
    });
    dispatch({
      type: "field",
      fieldName: `${fieldTitle}Error`,
      payload: false
    });
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Alexander Chernetsky</title>
        <meta
          name="description"
          content="Contact Alexander Chernetsky. Ask questions or hire a frontend web developer."
        />
        <meta
          name="google-site-verification"
          content="B_oyNY7Nj-cESbBvN-hrxgz1HsbKpTGLSGL-_YWf-vY"
        />
      </Head>

      <ContactPageWrapper id="contact-page">
        <ContentWrapper>
          <PageTitleWrapper>
            <Heading bright>Contact</Heading>
            <Stripe bright />
          </PageTitleWrapper>

          <Question>Have a question or want to work together?</Question>

          <Form
            onSubmit={handleSubmit}
            method="post"
            enctype="multipart/form-data"
          >
            {/* Full Name */}
            <RowWrapper>
              <InputComponent
                placeholder="Full name"
                errorMessage={fullNameError}
                onChange={event => inputChangeHandler("fullName", event)}
                value={fullName}
                type="fullName"
              />
            </RowWrapper>
            {/* Email */}
            <RowWrapper>
              <InputComponent
                placeholder="Email address"
                errorMessage={emailError}
                onChange={event => inputChangeHandler("email", event)}
                value={email}
                type="email"
              />
            </RowWrapper>
            {/* Message */}
            <RowWrapper>
              <TextareaComponent
                placeholder="Your message"
                errorMessage={messageError}
                value={message}
                onChange={event => inputChangeHandler("message", event)}
              />
            </RowWrapper>
            {/* Submit btn */}
            <ButtonsWrapper>
              <ButtonComponent
                text="Submit"
                colorTheme="green"
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              />
            </ButtonsWrapper>

            {/* Success modal */}
            <ModalComponent
              onCloseHandler={() => {
                dispatch({
                  type: "trigger_success",
                  payload: false
                });
                dispatch({
                  type: "reset_form"
                });
              }}
              title="Thank you!"
              visible={isSuccessModalVisible}
            >
              <p>Your message was sent successfully.</p>
            </ModalComponent>

            {/* Error modal */}
            <ModalComponent
              onCloseHandler={() =>
                dispatch({
                  type: "trigger_error",
                  payload: false
                })
              }
              title="That's an error!"
              visible={isErrorModalVisible}
            >
              <p>Sorry. Something went wrong.</p>
            </ModalComponent>
          </Form>

          {/* Footer */}
          <Footer>
            <SocIconsWrapper>
              {socIcons.map(item => {
                return (
                  <SocIconComponent
                    iconSrc={item.src}
                    iconName={item.name}
                    linkTo={item.linkTo}
                  />
                );
              })}
            </SocIconsWrapper>
            <Footnote>
              <Name>Alexander Chernetsky</Name>
              <Year>©2021</Year>
            </Footnote>
          </Footer>
        </ContentWrapper>
      </ContactPageWrapper>
    </Layout>
  );
};

export default Contacts;
