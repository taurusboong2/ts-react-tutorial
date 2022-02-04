import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; des: string }) => void;
};

const MyForm = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState({
    name: '',
    des: '',
  });

  const { name, des } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      des: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="des" value={des} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default MyForm;
