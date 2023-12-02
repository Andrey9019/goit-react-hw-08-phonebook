import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const styles = {
  container: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    minHeight: `calc(100vh - 50px)`,
  },

  title: {
    fontWeight: `500`,
    fontsize: `48px`,
    textAlign: `center`,
    marginBottom: `30px`,
  },

  formContainer: {
    width: `100%`,
    maxWidth: `400px`,
  },
};

export default function Register() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Registration</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
