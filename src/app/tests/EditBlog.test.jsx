import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import EditTopicForm from '../../components/EditBlogForm';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('EditTopicForm', () => {
  test('renders with initial values and updates values on change', () => {
    const mockId = '123';
    const mockTitle = 'Mock Title';
    const mockContent = 'Mock Content';

    const { getByLabelText } = render(
      <EditTopicForm id={mockId} title={mockTitle} content={mockContent} />
    );

    const titleInput = getByLabelText('Blog Title');
    const contentInput = getByLabelText('Blog Content');

    expect(titleInput.value).toBe(mockTitle);
    expect(contentInput.value).toBe(mockContent);

    const newTitle = 'New Title';
    const newContent = 'New Content';

    fireEvent.change(titleInput, { target: { value: newTitle } });
    fireEvent.change(contentInput, { target: { value: newContent } });

    expect(titleInput.value).toBe(newTitle);
    expect(contentInput.value).toBe(newContent);
  });

  test('submits form with updated values', async () => {
    const mockId = '123';
    const mockTitle = 'Mock Title';
    const mockContent = 'Mock Content';
    const updatedTitle = 'Updated Title';
    const updatedContent = 'Updated Content';

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });

    const { getByLabelText, getByText } = render(
      <EditTopicForm id={mockId} title={mockTitle} content={mockContent} />
    );

    const titleInput = getByLabelText('Blog Title');
    const contentInput = getByLabelText('Blog Content');
    const submitButton = getByText('Update Blog');

    fireEvent.change(titleInput, { target: { value: updatedTitle } });
    fireEvent.change(contentInput, { target: { value: updatedContent } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/api/blogs/${mockId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle: updatedTitle, newContent: updatedContent }),
      });
    });
  });

  test('handles submission error', async () => {
    const mockId = '123';
    const mockTitle = 'Mock Title';
    const mockContent = 'Mock Content';
    const updatedTitle = 'Updated Title';
    const updatedContent = 'Updated Content';

    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Failed to update blog'));

    const { getByLabelText, getByText, findByText } = render(
      <EditTopicForm id={mockId} title={mockTitle} content={mockContent} />
    );

    const titleInput = getByLabelText('Blog Title');
    const contentInput = getByLabelText('Blog Content');
    const submitButton = getByText('Update Blog');

    fireEvent.change(titleInput, { target: { value: updatedTitle } });
    fireEvent.change(contentInput, { target: { value: updatedContent } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/api/blogs/${mockId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newTitle: updatedTitle, newContent: updatedContent }),
      });
    });

    const errorMessage = await findByText("Failed to update blog");
    expect(errorMessage).toBeInTheDocument();
  });
});
