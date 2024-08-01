import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState();
  const [alert, setAlert] = useState('');

  const validateName = (name) => /^[a-zA-Z\s]*$/.test(name);
  const validateAge = (age) => /^\d+$/.test(age);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateName(name)) {
      setAlert('Name should only contain text characters.');
      return;
    }
    if (!validateEmail(email)) {
      setAlert('Email should be a valid email address.');
      return;
    }
    if (!validateAge(age)) {
      setAlert('Age should only contain numbers.');
      return;
    }

    try {
        const url = 'http://localhost:8000/api/users/create';
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, age }),
        });
        const data = await response.json();

        console.log(data);
        setAlert('Form submitted successfully!');
        setName('');
        setEmail('');
        setAge('');
    } catch (error) {
        console.error('Error:', error);
        setAlert('An error occurred. Please try again later.');
    }


  };

  return (
    <div className="flex items-center justify-center overflow-x-auto mt-28">
      <form className="border-black p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-white mb-4">User Form</h2>
        {alert && <div className="mb-4 p-2 bg-green-200 text-green-800 rounded">{alert}</div>}
        <div className="mb-4">
          <label className="block text-white">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Age</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
