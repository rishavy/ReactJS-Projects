import React from 'react';

const About = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p>Welcome to TextUtils, your go-to solution for managing and manipulating text effortlessly. Our application offers a variety of features designed to help you handle text in the most efficient way possible.</p>
      <ul className="list-disc list-inside ml-5 mt-2">
        <li>Convert text to uppercase or lowercase with a single click.</li>
        <li>Count the number of characters and words in your text.</li>
        <li>Remove extra spaces to clean up your text.</li>
        <li>Copy text to your clipboard for easy sharing.</li>
      </ul>
      <p className="mt-2">Our mission is to provide a simple and intuitive tool that enhances your productivity and makes text manipulation a breeze. Whether you're drafting an email, writing a report, or coding, TextUtils is here to help you streamline your workflow.</p>
      <p className="mt-2">Thank you for using TextUtils. We hope you enjoy using our app as much as we enjoyed creating it for you!</p>
    </div>
  );
};

export default About;
