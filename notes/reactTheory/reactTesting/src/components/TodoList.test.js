import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test("Check Todo List Text exist or not", () => {
  const { getByText } = render(<TodoList />)
  expect(getByText('Todo List')).toBeInTheDocument()
})

test("Check Enter task placeholder exist or not", () => {
  const { getByPlaceholderText } = render(<TodoList />)
  expect(getByPlaceholderText('Enter task...')).toBeInTheDocument()
})





// describe('TodoList component', () => {
//   test('renders correctly', () => {
//     const { getByText, getByPlaceholderText } = render(<TodoList />);
//     expect(getByText('Todo List')).toBeInTheDocument();
//     expect(getByPlaceholderText('Enter task...')).toBeInTheDocument();
//   });



//   test('removes a task correctly', () => {
//     const { getByText } = render(<TodoList />);
//     const addButton = getByText('Add Task');
//     fireEvent.click(addButton);

//     const removeButton = getByText('Remove');
//     fireEvent.click(removeButton);

//     expect(getByText('New Task')).not.toBeInTheDocument();
//   });

//   test('completes a task correctly', () => {
//     const { getByText } = render(<TodoList />);
//     const addButton = getByText('Add Task');
//     fireEvent.click(addButton);

//     const checkbox = getByText('New Task').previousElementSibling;
//     fireEvent.click(checkbox);

//     expect(checkbox.checked).toBeTruthy();
//     expect(getByText('New Task')).toHaveStyle('text-decoration: line-through');
//   });

//   test('skipped test', () => {
//     // This test is skipped
//     expect(true).toBe(true);
//   });

//   test.only('focused test', () => {
//     // This is the only test that will run
//     expect(true).toBe(true);
//   });

//   test('async test', async () => {
//     const data = await fetchData();
//     expect(data).toEqual(expectedData);
//   });

//   afterEach(() => {
//     // Teardown code
//   });
// });

// // Mock asynchronous function
// const fetchData = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Data');
//     }, 1000);
//   });
// };

const expectedData = 'Data';
