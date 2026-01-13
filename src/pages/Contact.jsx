import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import emailjs from "emailjs-com"

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
            .send(
                "service_14cbmng",
                "template_ujk9w53",
                {
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    subject: formData.subject,
                    message: formData.message
                },
                "9BowcnZyH49KSkPPJ"
            )
            .then(() => alert("Message sent successfully"))
            .catch((err) => {
                console.error(err)
                alert("Email failed. Check EmailJS config.")
            })
    }


    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Have a question or want to explore collaboration?
                        We’d love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Info icon={Mail} title="Email">
                            planourgrowth@gmail.com
                        </Info>

                        <Info icon={Phone} title="Phone / WhatsApp">
                            🇮🇳 +91 9701400799
                            <br />
                            🇺🇸 +1 9192403554 (WhatsApp)
                        </Info>

                        <Info icon={MapPin} title="Regions">
                            India & North America
                        </Info>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-50 rounded-xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                            <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                            <Input label="Company" name="company" value={formData.company} onChange={handleChange} />

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border rounded-lg"
                                >
                                    <option value="">Select</option>
                                    <option value="consultation">Consultation</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="careers">Careers</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border rounded-lg resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex justify-center gap-2 hover:bg-green-700 transition"
                            >
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

/* Helpers */

function Info({ icon: Icon, title, children }) {
    return (
        <div className="flex gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
                <Icon className="text-green-700" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-700">{children}</p>
            </div>
        </div>
    )
}

function Input({ label, ...props }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <input
                {...props}
                className="w-full px-4 py-3 border rounded-lg"
            />
        </div>
    )
}
