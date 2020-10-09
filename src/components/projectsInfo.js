/**
 * projectsInfo is an array that contains data for each app/project, stored in objects.
 * used by projects.js to render dynamically.
 */

import bootstrapNucamp from '../img/bootstrap-nucamp-project.png';
import reactNucamp from '../img/react-nucampsite-project.png';

export const projectsInfo = [
  {
    name: 'Nu Camping',
    technologies: 'Technologies: HTML, Bootstrap 4',
    github: 'https://github.com/timothytcliu/Bootstrap-Nucamp-project',
    website:
      'https://timothytcliu.github.io/Bootstrap-Nucamp-project/index.html',
    image: bootstrapNucamp,
    alt: 'bootstrap-nucamp-project',
  },
  {
    name: 'React Nu Camping',
    technologies:
      'Technologies: React, Redux, Redux Router, Bootstrap/Reactstrap  ',
    github: 'https://github.com/timothytcliu/React-nucampsite',
    website: 'https://timothytcliu.github.io/React-nucampsite/',
    image: reactNucamp,
    alt: 'react-nucamp-project',
  },
  /*{
    name: '',
    technologies: 'Technologies: ',
    github: '',
    website: '',
    image: '',
    alt: '',
  },
  {
    name: '',
    technologies: 'Technologies: ',
    github: '',
    website: '',
    image: '',
    alt: '',
  }, */
];
