import React from 'react';
import Contact2 from '../components/common/contact/Contact2'; 
import Touch from '../components/common/contact/Touch'; // ✅ Add this import

const Contact = () => {
  return (
    <div>
      <Contact2 />
      <Touch />
    </div>
  );
};

export default Contact;
