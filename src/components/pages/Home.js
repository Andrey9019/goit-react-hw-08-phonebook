import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#282c34', // dark background color
    color: 'white', // text color
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    animation: 'bounce 2s infinite', // bounce animation
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
