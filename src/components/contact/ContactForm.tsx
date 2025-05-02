
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const contactEmail = "jhakeshavkumar62093@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real application, we would use a service like EmailJS or a backend API
    // For now, we'll show a success message and details of what would be sent
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: `Your message has been sent to ${contactEmail}`,
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setLoading(false);
      
      console.log('Form submitted:', formData);
      console.log('Contact email:', contactEmail);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-maa-dark mb-6 text-center">Send Us A Message</h2>
          
          <div className="flex items-center justify-center mb-6">
            <Mail className="text-maa-blue mr-2" />
            <p className="text-sm text-gray-600">All messages will be sent to: <span className="font-medium">{contactEmail}</span></p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                required
              ></textarea>
            </div>
            
            <div className="flex justify-center pt-4">
              <button 
                type="submit" 
                className="btn-primary min-w-[150px]"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
