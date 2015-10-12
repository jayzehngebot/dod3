/**
 */

// import GitRepo from 'git-repository';
import task from './lib/task';
import s3 from 's3';

// TODO: Update deployment URL
// const remote = {
  // name: 'github',
  // url: 'https://github.com/{user}/{repo}.git',
  // branch: 'gh-pages',
// };

const remoteS3 = {
  name: 'dod.io',
  url: 'www.dod.io',
}

/**
 * Deploy the contents of the `/build` folder to GitHub Pages.
 */
export default task(async function deployS3() {
  // Initialize a new Git repository inside the `/build` folder
  // if it doesn't exist yet
  // const repo = await GitRepo.open('build', { init: true });
  // await repo.setRemote(remote.name, remote.url);

  // Fetch the remote repository if it exists
  // if ((await repo.hasRef(remote.url, remote.branch))) {
    // await repo.fetch(remote.name);
    // await repo.reset(`${remote.name}/${remote.branch}`, { hard: true });
    // await repo.clean({ force: true });
  // }

  // Build the project in RELEASE mode which
  // generates optimized and minimized bundles
  process.argv.push('release');

  await require('./build')();

  var client = s3.createClient({
    s3Options:{
      accessKeyId: process.env.S3KEY,
      secretAccessKey: process.env.S3SECRET
    },
  });

  var params = {
    localDir: "./build",

    s3Params: {
      Bucket: "www.dod.io",
      Key: "/",
    },
  };

  var uploader = client.uploadDir(params);

  uploader.on('error', function(err){
    console.error('unable to sync:', err.stack);
  });

  uploader.on('progress', function(){
    console.log("progress", uploader.progressAmount, uploader.progressTotal);
  });

  uploader.on('end',function(){
    console.log('done uploading!');
  })

  // exec('aws s3 --region us-east-1 ls s3://www.dod.io', function(err,stdout, stderr){
  //   console.log(stdout);
  // });

  // Push the contents of the build folder to the remote server via Git
  // await repo.add('--all .');
  // await repo.commit('Update ' + new Date().toISOString());
  // await repo.push(remote.name, 'master:' + remote.branch);
});


