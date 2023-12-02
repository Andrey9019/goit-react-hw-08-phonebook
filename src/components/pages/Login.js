import React from 'react';
import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f0f0f0',
  },
  formContainer: {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: 'white',
    width: '300px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
};

export default function Login() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}
