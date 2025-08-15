import { useState } from 'react';
import { contactData } from '../constants/data';

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        
        const mailtoLink = `mailto:${contactData.contactInfo[0].value}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        window.location.href = mailtoLink;
        setFormData({ name: "", email: "", subject: "", message: "" });
        alert("Thank you! Your email client should open now.");
    };

    const resetForm = () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return {
        formData,
        handleInputChange,
        handleSubmit,
        resetForm
    };
};
