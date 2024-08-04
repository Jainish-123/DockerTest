const express = require("express");
const { exec } = require("child_process");
const fs = require("fs-extra");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from backend');
});

// Helper function to execute shell commands with detailed error handling
const execPromise = (cmd) => {
  return new Promise((resolve, reject) => {
    console.log(`Executing command: ${cmd}`); // Debugging output

    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`Command failed: ${cmd}`); // More detailed error log
        reject(
          new Error(
            `Execution error: ${error.message}\nSTDOUT: ${stdout}\nSTDERR: ${stderr}`
          )
        );
      } else {
        resolve(stdout);
      }
    });
  });
};

// Function to generate a unique image name
const generateImageName = (repoName) => {
  // const version = crypto.randomBytes(4).toString("hex");
  return `${repoName.toLowerCase()}`;
};

// Define the root directory and cloned_repos path
const clonedReposDir = "/cloned_repos";

// Ensure the cloned_repos directory exists
fs.ensureDirSync(clonedReposDir); // Ensure the directory exists, creates it if not

const deployBackend = async () => {
  const repoUrl = "https://github.com/Jainish-123/DockerTest.git";
  const baseDir = "dockertest";
  const environment = "node";

  if (!repoUrl || !baseDir || !environment) {
    return {
      error: "Missing required parameters: repoUrl, baseDir, or environment.",
    };
  }

  const repoName = path.basename(repoUrl, ".git");
  const imageName = generateImageName(repoName);
  const dockerScriptPath = path.join(__dirname, "create_docker_image.sh");

  const timestamp = new Date().toISOString().replace(/[:.-]/g, "");
  const clonedDir = path.join(clonedReposDir, `${repoName}-${timestamp}`); // Add timestamp for uniqueness

  try {
    await execPromise(`git clone ${repoUrl} ${clonedDir}`);
    const targetDir = path.join(clonedDir, baseDir);

    if (!(await fs.pathExists(targetDir))) {
      throw new Error(
        `Base directory "${baseDir}" does not exist in the cloned repository.`
      );
    }

    const result = await execPromise(
      `bash ${dockerScriptPath} ${environment} ${targetDir} ${imageName}`
    );
    return { message: "Deployment successful", imageName, output: result };
  } catch (error) {
    console.error(`Deployment error: ${error.message}`);
    return { error: `Deployment failed: ${error.message}` };
  }
};

// deployBackend()
//   .then((result) => {
//     console.log("...result... : ", result);
//   })
//   .catch((error) => {
//     console.error("Deployment failed: ", error);
//   });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
