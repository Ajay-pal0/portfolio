import { useState } from 'react';
import { personalData } from '../data';

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
    const [statusMessage, setStatusMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const triggerMailtoFallback = (name, email, subject, message) => {
        const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        window.location.href = mailtoLink;
        setStatusMessage("We've opened your mail client to send the inquiry directly.");
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        
        // If the access key is the default placeholder or empty, trigger the mailto fallback directly
        if (!personalData.web3formsAccessKey || personalData.web3formsAccessKey === "YOUR_ACCESS_KEY_HERE") {
            triggerMailtoFallback(name, email, subject, message);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        setStatusMessage("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: personalData.web3formsAccessKey,
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    from_name: "Ajay Pal Portfolio"
                })
            });

            const data = await response.json();

            if (response.status === 200 || data.success) {
                setSubmitStatus('success');
                setStatusMessage("Thank you! Your message has been sent successfully.");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                // If API fails, fall back to mailto client
                console.warn("Web3Forms submission failed. Falling back to mailto client...", data);
                triggerMailtoFallback(name, email, subject, message);
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            // Fallback to mailto client on network error
            triggerMailtoFallback(name, email, subject, message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus(null);
        setStatusMessage("");
    };

    return {
        formData,
        isSubmitting,
        submitStatus,
        statusMessage,
        handleInputChange,
        handleSubmit,
        resetForm
    };
};
