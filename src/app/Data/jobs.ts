import { Job } from '../Models/job';

export const JOBS: Job[] = [
    {
        id: 1, companyname: 'Corporate generics',
        name: 'Software Engineer', date: 'September 2017 - Present ',
        tasks: ['Development of  apps '], clients: ['Pharma'],
        skills: ['JavaScript', 'TypeScript', 'BitBucket', 'Ubuntu', 'React', 'Svelte', 'AWS', 'GraphQL', 'JSS', 'SASS','NODEJS', 'JEST', 'SCRUM', 'JIRA']
    },
    {
        id: 2, companyname: 'Analytics Here', name: 'Intern Developer',
        date: 'April 2016 - September 2017',
        tasks: ['Development of Hybrid Applications', 'PWA apps', 'Unit testing',
            'Development and technical support of Mendix Applications', 'Responsive Design'],
        clients: ['GymBee'], skills: ['ANGULARJS, ANGULAR2+, SCRUM, GIT, TypeScript, JavaScript, HTML, CSS, Karma, Jasmine, Ionic, Cordova, NODEJS, EXPRESS']
    },
];


/*
* {name: flow, url : http...} => ng ifs no html
*/