import React from 'react';

interface Props  {
  placeholder:string
  labelName: string
  value?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  name: string
  children?: JSX.Element

}

const InputLabel = ({ placeholder, labelName, value, onChange, name, children }: Props) => {
  return (

    <div>
      <label htmlFor=""> {labelName}

        <input type="text" name={name}  placeholder= { placeholder }  value = {value} onChange = {onChange}/>
      </label>
      {children}
    </div>

  );
};

export default InputLabel;