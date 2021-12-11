const applicationTypes = [
  {
    applicationTypeId: 1,
    name: '.NET Core UI',
    description: '.NET Core UI',
  },
  {
    applicationTypeId: 2,
    name: '.NET Core API',
    description: '.NET Core API',
  },
  {
    applicationTypeId: 3,
    name: 'React App',
    description: 'React app',
  },
];

const applications = [
  {
    applicationId: 1,
    name: 'Wimc-net',
    description: 'Cloud resource management',
    applicationTypeId: 1,
  },
  {
    applicationId: 2,
    name: 'Wimc.Services',
    description: 'Cloud resource API',
    applicationTypeId: 2,
  },
  {
    applicationId: 3,
    name: 'Wimc.App',
    description: 'Cloud resource management SPA',
    applicationTypeId: 3,
  },
];

const newApplication = {
  applicationId: null,
  name: '',
  description: '',
  applicationTypeId: null,
};

module.exports = {
  newApplication,
  applications,
  applicationTypes,
};
