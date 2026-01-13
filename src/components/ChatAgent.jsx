import React, { useState } from 'react';
import { MessageCircle, X, Mail } from 'lucide-react'; // Optional: install lucide-react for icons

const ChatAgent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, fontFamily: 'sans-serif' }}>
            {/* Chat Bubble / Icon */}
            {!isOpen && (
                <div
                    onClick={() => setIsOpen(true)}
                    style={{
                        backgroundColor: '#90ee90', // Matching your site's green
                        padding: '12px 20px',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <span style={{ fontWeight: '600', color: '#1a3a3a' }}>Hi, let's connect!</span>
                    <MessageCircle size={24} color="#1a3a3a" />
                </div>
            )}

            {/* Expanded Contact Box */}
            {isOpen && (
                <div style={{
                    width: '300px',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    overflow: 'hidden',
                    animation: 'slideUp 0.3s ease-out'
                }}>
                    {/* Header */}
                    <div style={{ backgroundColor: '#1a3a3a', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 'bold' }}>PlanOurGrowth Support</span>
                        <X size={20} onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }} />
                    </div>

                    {/* Body */}
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <p style={{ color: '#555', fontSize: '14px', marginBottom: '20px' }}>
                            We'd love to help you scale your business. Drop us a line below!
                        </p>
                        <a
                            href="mailto:planourgrowth@gmail.com"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                backgroundColor: '#90ee90',
                                color: '#1a3a3a',
                                padding: '12px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: 'bold'
                            }}
                        >
                            <Mail size={18} />
                            Email Us
                        </a>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default ChatAgent;