import { FcLibrary } from 'react-icons/fc';

export default {
  name: 'publication',
  title: 'Corporate Credentials & Documentation', // Changed from "Publication & Books"
  type: 'document',
  icon: FcLibrary,
  fields: [
    { 
      name: 'title', 
      title: 'Document or Certification Name', // Changed from "Book/Series Title"
      type: 'string' 
    },
    { 
      name: 'slug', 
      title: 'URL Identifier', // Changed from "Slug"
      type: 'slug', 
      options: { source: 'title' } 
    },
    {
      name: 'author',
      title: 'Issuing Department / Team', // Changed from "Author/Team"
      type: 'reference',
      to: [{ type: 'author' }],
    },
    { 
      name: 'coverImage', 
      title: 'Document Preview Image (or Badge)', // Changed from "Book Cover"
      type: 'customImage' 
    },
    {
      name: 'targetAudience',
      title: 'Restricted Stakeholders / Intended For', // Changed from "Target Audience"
      type: 'string',
      description: 'e.g., Tendering Committees, Legal Auditors, General Partners',
    },
    { 
      name: 'description', 
      title: 'Executive Summary', // Changed from "Synopsis"
      type: 'richText' 
    },
    {
      name: 'documentUpload',
      title: 'Certified Digital Copy (PDF/Office)', // Changed from "Document Upload"
      type: 'file',
      options: {
        storeOriginalFilename: true, 
      },
    },
  ],
};