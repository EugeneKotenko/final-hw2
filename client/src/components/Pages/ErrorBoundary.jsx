import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'; // Змінено імпорт

import '../../Assets/Styles/ErrorBoundary.scss';
import { PiNumberCircleFourBold, PiNumberCircleZeroBold } from "react-icons/pi";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Додайте логіку для відправки інформації про помилку на сервер або інші дії за вашим вибором.
  }

  handleBackToHomepage = () => {
    const navigate = useNavigate(); // Змінено отримання navigate
    navigate('/');
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <h1 className='numeric'><PiNumberCircleFourBold /><PiNumberCircleZeroBold /><PiNumberCircleFourBold /></h1>
            <h2 className='error-message'>Oops, something happened. This page is missing.</h2>
            <button onClick={this.handleBackToHomepage}>Back to homepage {'>'}</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
