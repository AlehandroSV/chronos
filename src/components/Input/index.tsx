import type { ComponentProps } from 'react';

type InputProps = { id: string; labelText?: string } & ComponentProps<'input'>;

export const Input = ({ id, labelText, ...rest }: InputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}

      <input id={id} {...rest} />
    </>
  );
};
