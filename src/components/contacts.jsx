import emailjs from 'emailjs-com';
// ...existing code...

const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
        `import.meta.env.service_id`,      // Replace with your EmailJS service ID
        `import.meta.env.template_id`,     // Replace with your EmailJS template ID
        formData,
        `import.meta.env.public_key`          // Replace with your EmailJS user ID (public key)
    )
        .then(() => {
            setIsSubmitting(false);
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        })
        .catch(() => {
            setIsSubmitting(false);
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive"
            });
        });
};