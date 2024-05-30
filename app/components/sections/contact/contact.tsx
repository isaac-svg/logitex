import React, { ReactElement, forwardRef } from 'react';

type Props = {
  placeholder: string;
  label: string;
  classes?: string;
};

const ContactInput = forwardRef<HTMLDivElement, Props>(
  ({ label, placeholder, classes }, ref) => (
    <div className="flex flex-col gap-4" ref={ref}>
      <label htmlFor={placeholder}>{label}</label>
      <input
        type="text"
        className={`text-[#5a5b5b] py-7 px-4 block w-full height-[38px] mb-[10px] text-base outline-none border-orange border-[1px]   bg-[#fff] ${classes}`}
        id={label}
        placeholder={placeholder}
      />
    </div>
  ),
);

export const ContactSelect = ({
  placeholder,
  label,
}: {
  placeholder: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={label}>{label}</label>

      <select
        name={label}
        id={label}
        className="text-[#5a5b5b] py-7 px-4 block w-full height-[38px] mb-[10px] text-base outline-none border-orange border-[1px]   bg-[#fff0] flex-1"
      >
        <option value="" defaultValue={label}>
          {label}
        </option>
        <option value="firstchoice">First choice</option>
        <option value="secondchoice">Second choice</option>
        <option value="thirdchoice">Third choice</option>
      </select>
    </div>
  );
};

export const ContactTextarea = ({
  placeholder,
  label,
}: {
  placeholder: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={label}>{label}</label>
      <textarea
        name={placeholder}
        id={label}
        className="text-[#5a5b5b] py-9 px-5 block w-full height-[38px] mb-[10px] text-base outline-none border-orange border-[1px]   bg-[#fff] "
        placeholder={placeholder}
        cols={50}
      ></textarea>
    </div>
  );
};

ContactInput.displayName = 'ContactInput';

export default ContactInput;
