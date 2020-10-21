/**
 * projectsInfo is an array that contains data for each app/project, stored in objects.
 * used by projects.js to render dynamically.
 */

import bootstrapNucamp from '../img/bootstrap-nucamp-project.png';
import reactNucamp from '../img/react-nucampsite-project.png';
import nativeNucamp from '../img/native-nucampsite.png';
import youtubeParty from '../img/youtube-party.png';

export const projectsInfo = [
  {
    id: 0,
    name: 'YouTube Party',
    technologies:
      'Technologies: React.js, Javascript, Redux, React-Router, Bootstrap',
    github: 'https://github.com/timothytcliu/YouTube-Party-React',
    website: 'https://timothytcliu.github.io/YouTube-Party-React/',
    image: youtubeParty,
    alt: 'youtube-party-app',
  },
  {
    id: 1,
    name: 'Nu Camping',
    technologies: 'Technologies: Bootstrap 4, HTML, CSS',
    github: 'https://github.com/timothytcliu/Bootstrap-Nucamp-project',
    website:
      'https://timothytcliu.github.io/Bootstrap-Nucamp-project/index.html',
    image: bootstrapNucamp,
    alt: 'bootstrap-nucamp-project',
  },
  {
    id: 2,
    name: 'React Nu Camping',
    technologies:
      'Technologies: React.js, Javascript, Redux, React-Router, Bootstrap',
    github: 'https://github.com/timothytcliu/React-nucampsite',
    website: 'https://timothytcliu.github.io/React-nucampsite/',
    image: reactNucamp,
    alt: 'react-nucamp-project',
  },
  {
    id: 3,
    name: 'Native Nucampsite',
    technologies: 'Technologies: React-Native, Expo, Redux',
    github: 'https://github.com/timothytcliu/React-Native-nucamp-project',
    website: '#',
    image: nativeNucamp,
    alt: 'react-native-nucamp',
  },
];
