import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../Components/TaskForm';

describe('TaskForm Component', () => {
  it('renders the input and button', () => {
    render(
      <TaskForm
        task=""
        handleChange={() => {}}
        addNewTask={() => {}}
      />
    );

    expect(screen.getByLabelText(/Task title/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Set Task/i })).toBeInTheDocument();
  });

  it('calls handleChange when input changes', () => {
    const handleChangeMock = jest.fn();

    render(
      <TaskForm
        task=""
        handleChange={handleChangeMock}
        addNewTask={() => {}}
      />
    );

    const input = screen.getByLabelText(/Task title/i);
    fireEvent.change(input, { target: { value: 'New Task' } });

    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });

  it('calls addNewTask when form is submitted', () => {
    const addNewTaskMock = jest.fn((e) => e.preventDefault());

    render(
      <TaskForm
        task="Sample Task"
        handleChange={() => {}}
        addNewTask={addNewTaskMock}
      />
    );

    const input = screen.getByLabelText(/Task title/i);
    const form = input.closest('form'); 

    fireEvent.submit(form);

    expect(addNewTaskMock).toHaveBeenCalledTimes(1);
  });
});