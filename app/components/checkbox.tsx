import React from 'react';

type Props = {
  label: string;
};

const Checkbox = ({ label }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        className="checked:bg-[#1f1e26] w-5 h-5"
        id={label}
      />
      <label htmlFor={label} className="text-[#5a5b5b] text-base">
        {' '}
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
