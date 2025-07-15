import * as fs from "node:fs/promises";
import * as path from "node:path";

const __dirname = import.meta.dirname;
const drive = "W:\\";
const source = path.join(__dirname, "../dist");
const destination = path.join(drive, "talk-list");

const checkDrive = async (drive) => {
    return await fs.stat(drive)
}
const removeDeploymentDir = async (deploymentDir) => {
    return await fs.rm(deploymentDir, { recursive: true, force: true });
}
const createDeploymentDir = async (deploymentDir) => {
    return await fs.mkdir(deploymentDir, { recursive: true });
}
const copyFiles = async (buildDir, deploymentDir) => {
    return await fs.cp(buildDir, deploymentDir, { recursive: true });
}

await checkDrive(drive);
await removeDeploymentDir(destination);
console.log(`🗑️  ${destination} removed`);
await createDeploymentDir(destination);
console.log(`🪄  ${destination} created`);
await copyFiles(source, destination);
console.log(`🎉 Files copied from ${source} to ${destination}`);
process.exit(0);