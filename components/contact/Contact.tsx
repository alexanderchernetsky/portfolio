'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type ContactFormValues, contactSchema } from "@/components/contact/schema";
import apiManager from "@/services/ApiManager";
import socIcons from "../../constants/contact";
import Button from "../shared/Button";
import Input from "../shared/Input";
import Modal from "../shared/Modal";
import Textarea from "../shared/Textarea";
import SocIcon from "./SocIcon";

function Contact() {
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

    // Initialize react-hook-form with Zod validation
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            fullName: "",
            email: "",
            message: "",
        },
        mode: "onBlur",
        criteriaMode: "all", // Show all errors at once
    });

    // Form submission handler
    const onSubmit = async (data: ContactFormValues) => {
        try {
            // Call API
            await apiManager.sendContactUsRequest(data);

            // Show success modal
            setIsSuccessModalVisible(true);

            // Reset form after successful submission
            reset();
        } catch (error) {
            console.error("Form submission error:", error);
            setIsErrorModalVisible(true);
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <section
            id="contact"
            className="relative w-full min-h-screen flex flex-col items-center justify-start bg-contact"
        >
            <div className="w-full flex flex-col items-center justify-start">
                <div className="mt-16 w-full px-6 sm:px-8 md:px-0 max-w-[1440px] mx-auto flex flex-col items-center">
                    <h1 className="text-[34px] font-bold uppercase text-primary">Contact</h1>
                    <div className="w-16 h-1 bg-primary mt-3" />
                </div>

                <p className="mt-20 font-semibold text-lg text-contact-question">
                    Have a question or want to work together?
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-10 w-full max-w-[686px] p-6 md:p-3"
                >
                    {/* Full name */}
                    <div className="mb-4">
                        <Input
                            placeholder="Full name"
                            errorMessage={errors.fullName?.message}
                            type="text"
                            {...register("fullName")}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <Input
                            placeholder="Email address"
                            errorMessage={errors.email?.message}
                            type="email"
                            {...register("email")}
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <Textarea
                            placeholder="Your message"
                            errorMessage={errors.message?.message}
                            {...register("message")}
                        />
                    </div>

                    <div className="w-full flex justify-center mb-6">
                        <Button
                            colorTheme="green"
                            type="submit"
                            disabled={isSubmitting}
                            loading={isSubmitting}
                        >
                            Submit
                        </Button>
                    </div>
                </form>

                <Modal
                    title="Thank you!"
                    visible={isSuccessModalVisible}
                    onCloseHandler={() => setIsSuccessModalVisible(false)}
                >
                    <p>Your message was sent successfully.</p>
                </Modal>

                <Modal
                    title="That's an error!"
                    visible={isErrorModalVisible}
                    onCloseHandler={() => setIsErrorModalVisible(false)}
                >
                    <p>Sorry. Something went wrong.</p>
                </Modal>
            </div>

            <footer className="absolute bottom-0 h-[200px] w-full flex flex-col justify-center items-center bg-footer py-10 md:py-4">
                <div className="flex gap-6 justify-center items-center">
                    {socIcons.map(item => (
                        <SocIcon
                            key={item.name}
                            src={item.src}
                            name={item.name}
                            linkTo={item.linkTo}
                        />
                    ))}
                </div>

                <div className="mt-6 flex flex-row gap-2 text-center opacity-60">
                    <p className="font-medium text-footnote">
                        Alexander Chernetsky
                    </p>
                    <p className="text-highlight">©{currentYear}</p>
                </div>
            </footer>
        </section>
    );
}

export default Contact;
