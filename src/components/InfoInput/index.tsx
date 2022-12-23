import React, { useState } from 'react';
import styles from './styles.module.scss';

interface InputProps {
  input: {
    label: string;
    type: string;
    name: string;
    id: string;
    placeholder: string;
    defaultValue: string | undefined | number;
    ref: React.RefObject<HTMLInputElement>;
  };
}

const InfoInput = ({ input }: InputProps) => {
  const [error, setError] = useState<boolean>(false);

  const handleInputTouch = (inputVal: string | undefined) => {
    if (!inputVal || inputVal.trim().length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <label htmlFor={input.id} className={styles.label}>
      <span>
        {input.label}
        {error && (
          <strong className={styles.error}>This field is required</strong>
        )}
      </span>
      <input
        required
        type={input.type}
        name={input.name}
        id={input.id}
        placeholder={input.placeholder}
        className={`${styles.input} ${error && styles.errorInput}`}
        defaultValue={input.defaultValue}
        ref={input.ref}
        onBlur={() => handleInputTouch(input.ref?.current?.value)}
      />
    </label>
  );
};

export default InfoInput;
