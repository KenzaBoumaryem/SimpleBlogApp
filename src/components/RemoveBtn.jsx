"use client";

import { useRouter } from "next/navigation";


export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeBlog = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeBlog}type="button" data-modal-target="delete-modal" data-modal-toggle="delete-modal" class="tw-flex tw-items-center tw-text-red-700 tw-hover:text-white tw-border tw-border-red-700 tw-hover:bg-red-800 tw-focus:ring-4 tw-focus:outline-none tw-focus:ring-red-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-3 tw-py-2 tw-text-center tw-dark:border-red-500 tw-dark:text-red-500 tw-dark:hover:text-white tw-dark:hover:bg-red-600 tw-dark:focus:ring-red-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="tw-h-4 tw-w-4 tw-mr-2 tw--ml-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
       Delete
    </button>
    
  );
}
