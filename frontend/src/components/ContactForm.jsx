import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEBFORM_ACCESS_KEY, 
                    ...formData
                }),
            });
            const result = await response.json();
            
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(result.message || "Failed to send the message.");
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage("Network error. Please try again later.");
        }
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label className="text-[10px] font-mono text-subtext uppercase tracking-[0.2em] ml-2">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-[#00FF9C]/50 transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-mono text-subtext uppercase tracking-[0.2em] ml-2">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    required
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-[#00FF9C]/50 transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-mono text-subtext uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-[#00FF9C]/50 transition-colors resize-none"
                />
            </div>

            {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl text-sm">
                    Message sent successfully! I'll get back to you soon.
                </div>
            )}

            {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-sm">
                    {errorMessage}
                </div>
            )}

            <motion.button
                disabled={status === 'submitting'}
                whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
                whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                className="w-full bg-[#00FF9C] text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,255,156,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? 'Sending...' : (
                    <>
                        Send Message <Send className="w-4 h-4" />
                    </>
                )}
            </motion.button>
        </form>
    );
};

export default ContactForm;
