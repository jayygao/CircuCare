import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Path to the contacts.json file
    const filePath = path.join(process.cwd(), 'data', 'contacts.json');

    // Read the existing data from the file
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);

    // Add new contact data
    data.push({ name, email, message, date: new Date().toISOString() });

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;