// ResetPassword.jsx
import './ResetPassword.css';

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useResetPassword } from '@/hooks/apis/resetpassword/useResetPassword';

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { resetPasswordMutate, isPending, isSuccess } = useResetPassword();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!password.trim()) {
      setMsg('Please enter a new password');
      return;
    }
    
    if (password.length < 8) {
      setMsg('Password must be at least 8 characters long');
      return;
    }
    
    if (password !== confirmPassword) {
      setMsg('Passwords do not match');
      return;
    }

    try {
      const res = await resetPasswordMutate({ token, password });
      setMsg(res.data.msg);
      navigate('/auth/signin');
    } catch (err) {
      setMsg(err?.response?.data?.msg || 'Something went wrong. Please try again.');
    }
  };

  const handleBackToLogin = () => {
    // Add your navigation logic here
    console.log('Navigate back to login');
    navigate('/auth/signin');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-wrapper">
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
        <div className="reset-password-card">
          {/* Header */}
          <div className="card-header">
            <div className="icon-container">
              <svg className="lock-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V8a4 4 0 00-8 0v1H7a2 2 0 00-2 2v9a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="card-title">Reset Password</h2>
            <p className="card-subtitle">
              Enter your new password below to complete the reset process.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="reset-password-form">
            {/* Password Input */}
            <div className="input-group">
              <label htmlFor="password" className="input-label">
                New Password
              </label>
              <div className="input-container">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="password-input"
                  disabled={isPending}
                />
                <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V8a4 4 0 00-8 0v1H7a2 2 0 00-2 2v9a2 2 0 002 2z" />
                </svg>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggle-password-btn"
                >
                  {showPassword ? (
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="input-group">
              <label htmlFor="confirmPassword" className="input-label">
                Confirm New Password
              </label>
              <div className="input-container">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="password-input"
                  disabled={isPending}
                />
                <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V8a4 4 0 00-8 0v1H7a2 2 0 00-2 2v9a2 2 0 002 2z" />
                </svg>
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="toggle-password-btn"
                >
                  {showConfirmPassword ? (
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="password-requirements">
              <p className="requirements-title">Password must contain:</p>
              <ul className="requirements-list">
                <li className={password.length >= 8 ? 'requirement-met' : ''}>
                  At least 8 characters
                </li>
                <li className={/[A-Z]/.test(password) ? 'requirement-met' : ''}>
                  One uppercase letter
                </li>
                <li className={/[a-z]/.test(password) ? 'requirement-met' : ''}>
                  One lowercase letter
                </li>
                <li className={/\d/.test(password) ? 'requirement-met' : ''}>
                  One number
                </li>
              </ul>
            </div>

            <button 
              type="submit" 
              disabled={isPending || !password.trim() || password !== confirmPassword}
              className="submit-button"
            >
              {isPending ? (
                <>
                  <div className="loading-spinner"></div>
                  Resetting...
                </>
              ) : (
                'Reset Password'
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
                <strong>Password reset successful!</strong> You can now use your new password to log in to your account.
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