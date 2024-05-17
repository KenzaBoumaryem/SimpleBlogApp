// Dans votre fichier Input.js
import React from 'react';

const TextArea = ({ name, value, onChange }) => {
  return (
    <div className="tw-mb-5">
      <label
        htmlFor={name}
        className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
      >
        {name}
      </label>
      <textarea
        id={name}
        onChange={onChange}
        value={value}
        type="text"
        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 tw-h-40 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
        placeholder={name}
        required
      />
    </div>
  );
};

export default TextArea;
