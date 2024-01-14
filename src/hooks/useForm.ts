import { useState } from "react";

export const useForm = <T extends object>(initStatus: T) => {
  const [form, setForm] = useState(initStatus);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    ...form,
    handleChange,
  };
};
