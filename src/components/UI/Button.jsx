
import React from 'react';

const Button = ({ name }) => {
  return (
    <button
      type="submit"
      className="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800"
    >
       {name}
    </button>
  );
};

export default Button;
