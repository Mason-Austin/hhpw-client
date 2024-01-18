/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const formData = {
    name: user.fbUser.displayName,
    uid: user.uid,
  };

  useEffect(() => {
    registerUser(formData).then(() => updateUser(user.uid));
  }, []);
  return (null);
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    fbUser: PropTypes.shape({
      displayName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
