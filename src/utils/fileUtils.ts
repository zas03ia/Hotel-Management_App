import fs from 'fs';
import path from 'path';
import { DB_PATH } from '../config/dbConfig'

// Ensure the directory exists
export const ensureDirectoryExists = (filePath: string) => {
  const directory = path.dirname(filePath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

// Function to save data to a file with error handling
export const saveToFile = async (filePath: string, data: any) => {
  try {
    const fullPath = path.join(DB_PATH , filePath);
    ensureDirectoryExists(fullPath);

    // Convert data to a pretty JSON string with 2 spaces for indentation
    const prettyData = JSON.stringify(data, null, 2);

    // Write the pretty-formatted JSON data to the file
    fs.writeFileSync(fullPath, prettyData, 'utf-8');

    console.log(`File saved successfully to ${fullPath}`);
  } catch (error) {
    console.error(`Error saving file to ${filePath}:`, error);
    const err = error as Error;
    throw new Error(`Failed to save file: ${err.message}`);
  }
};


export const readFromFile = async (filePath: string) => {
  const fullPath = path.join(DB_PATH , filePath);
  
  ensureDirectoryExists(fullPath);

  try {
    // Read the file and parse the JSON data
    const fileData = await fs.promises.readFile(fullPath, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    const err = error as Error;
    throw new Error(`Error reading from file: ${err.message}`);
  }
};
