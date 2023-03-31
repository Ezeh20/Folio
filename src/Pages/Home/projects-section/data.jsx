import { FiGithub, FiLink } from "react-icons/fi";

const works = [
    {
        id: 1,
        img: 'https://i.ibb.co/ts2dRmJ/todo-profile.png',
        projectName: 'Task master',
        projectDescription: `This is a CRUD application which makes use of firebase as a backend. Users must login or signup to cre
        ate a task. When ticked as 'completed', that task will be saved in a completed tasks collection which shows the task, taskId
        start time and end time.There is also an xp system where each completed task grants 10 points which then unlocks awards if the needed 
        points are enough`,
        tools: ['React', 'Sass', 'Framer', 'Firebase'],
        github: <FiGithub />,
        link: <FiLink />
    }
]