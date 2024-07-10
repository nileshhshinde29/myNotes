
import { fn } from "@storybook/test";

import Task from '../components/Task';

export const ActionsData = {
    onArchiveTask: fn(),  // fn() allows us to create a callback that appears in the Actions panel of the Storybook UI when clicked. So when we build a 
    onPinTask: fn(),      //  pin button, we’ll be able to determine if a button click is successful in the UI.
};

export default {
    component: Task, // the component itself
    title: 'Task', // how to group or categorize the component in the Storybook sidebar
    tags: ['autodocs'],  //to automatically generate documentation for our components
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,  // additional information required by the story but should not be rendered in Storybook
    args: {
        ...ActionsData,
    },    // define the action args that the component expects to mock out the custom events
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'enter text',
            state: 'TASK_INBOX',
        },
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_PINNED',
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
    },
};