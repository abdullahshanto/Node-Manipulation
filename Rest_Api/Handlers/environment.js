const environment={};

environment.stagging = {
  port:3000,
  envName : 'stagging'
}

environment.production = {
  port:5000,
  envName : 'production'
}

const currentEnvironment=typeof(process.env.Node_env)==='string'?process.env.Node_env:'stagging';

const environmentToExport=typeof environment[currentEnvironment]==='object'
?environment[currentEnvironment]:environment.stagging;

export default environmentToExport