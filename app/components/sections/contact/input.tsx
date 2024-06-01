import React from 'react';

type Props = {
  placeholder: string;
};

const Input = ({ placeholder }: Props) => {
  return (
    <>
      <input
        type="text"
        className="text-[#5a5b5b] py-9 px-5 block w-full height-[38px] mb-[10px] text-base outline-none border-b-[#aaa] border-b-[1px]   bg-[#fff0] "
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
