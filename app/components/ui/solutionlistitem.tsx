import React from 'react';

const SolutionListItem = ({ text }: { text: string }) => {
  return (
    <li className=" flex items-center gap-4">
      <div>
        <div
          className=" rounded-full w-3 h-3 border-2 border-orange"
          style={{ borderRadius: '100%' }}
        ></div>
      </div>
      <p>{text}</p>
    </li>
  );
};

export default SolutionListItem;
