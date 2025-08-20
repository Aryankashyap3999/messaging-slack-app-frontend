// ForgotPassword.jsx
import './ForgotPassword.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForgetPassword } from '@/hooks/apis/resetpassword/useForgetPassword';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const { forgetPasswordMutate, isPending, isSuccess } = useForgetPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setMsg('Please enter your email address');
      return;
    }

    try {
      const res = await forgetPasswordMutate({ email });
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err?.response?.data?.msg || 'Something went wrong. Please try again.');
    }
  };

  const handleBackToLogin = () => {
    // Add your navigation logic here
    console.log('Navigate back to login');
    navigate('/auth/signin');
    
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-wrapper">
        {/* Back Button */}
        <button 
          onClick={handleBackToLogin}
          className="back-button"
          type="button"
        >
          <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Login
        </button>

        {/* Main Card */}
        <div className="forgot-password-card">
          {/* Header */}
          <div className="card-header">
            <div className="icon-container">
              <svg className="mail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="card-title">Forgot Password?</h2>
            <p className="card-subtitle">
              No worries! Enter your email and we'll send you a reset link.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <div className="input-container">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  disabled={isPending}
                />
                <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isPending || !email.trim()}
              className="submit-button"
            >
              {isPending ? (
                <>
                  <div className="loading-spinner"></div>
                  Sending...
                </>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>

          {/* Message Display */}
          {msg && (
            <div className={`message ${isSuccess ? 'message-success' : 'message-error'}`}>
              <svg 
                className="message-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isSuccess ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                )}
              </svg>
              <p className="message-text">{msg}</p>
            </div>
          )}

          {/* Success Additional Info */}
          {isSuccess && msg && (
            <div className="success-info">
              <p className="success-info-text">
                <strong>Check your email!</strong> If an account with that email exists, 
                you'll receive a password reset link within a few minutes.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="card-footer">
          <p className="footer-text">
            Remember your password?{' '}
            <button 
              onClick={handleBackToLogin}
              className="footer-link"
              type="button"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}