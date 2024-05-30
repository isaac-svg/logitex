import React from 'react';

type Props = {
  placeholder: string;
};

const Select = ({ placeholder }: Props) => {
  return (
    <>
      {/* <select
        type="text"
        className="text-[#5a5b5b] py-9 px-5 block w-full height-[38px] mb-[10px] text-base outline-none border-b-[#aaa] border-b-[1px]   bg-[#fff0] "
        placeholder={placeholder}
      /> */}
      <select
        name="freightcatgegory"
        id="freightcatgegory"
        className="text-[#5a5b5b] py-9 px-5 block w-full height-[38px] mb-[10px] text-base outline-none border-b-[#aaa] border-b-[1px]   bg-[#fff0] "
      >
        <option value="" defaultValue={placeholder}>
          {placeholder}
        </option>
        <option value="firstchoice">First choice</option>
        <option value="secondchoice">Second choice</option>
        <option value="thirdchoice">Third choice</option>
      </select>
    </>
  );
};

export default Select;
