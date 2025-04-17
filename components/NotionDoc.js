import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have shadcn/ui setup
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'DevSecOps Pipeline Implementation',
    link: 'https://simple-bookcase-dc9.notion.site/DevSecOps-Pipeline-Implementation-1d707659b93480fd96c4dac74ca8a43a?pvs=74',
  },
  {
    name: 'Nginx Deep Dive: Full-Stack Deployment on AWS EC2',
    link: 'https://simple-bookcase-dc9.notion.site/Nginx-Deep-Dive-1d707659b93480eba96cd2bb05a0bc94?pvs=74',
  },
  {
    name: 'AWS Devops with Argo CD',
    link: 'https://simple-bookcase-dc9.notion.site/AWS-Devops-with-Argo-CD-1d807659b93480e4bbe2d7065714479e?pvs=4',
  },
  {
    name: 'Terraform Infrastructure Deployment (EC2, S3, Dynamo)',
    link: 'https://simple-bookcase-dc9.notion.site/Terraform-Infra-1d707659b9348079b37ec5dcf8093b60?pvs=4',
  },
  {
    name: 'App Deployment using Linode (Circle CI, Linode, Helm)',
    link: 'https://github.com/JaguarsCodehub/development-demo',
  },
];

const MyDevopsProjects = () => {
  return (
    <div className='flex flex-col items-center justify-start md:p-8'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 sm:mb-8 md:mb-10 text-center'>
        My Devops Projects
      </h1>
      <div className='w-full max-w-3xl space-y-4 sm:space-y-6 md:space-y-4'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant='outline'
              className='w-full flex items-center justify-center py-4 sm:py-5 rounded-lg md:py-6 text-lg sm:text-xl md:text-2xl font-mono bg-gray-300 text-gray-600 border border-dashed border-gray-700 hover:bg-gray-500/50 hover:border-gray-600 transition-all duration-300'
              onClick={() => window.open(project.link, '_blank')} // Open in new tab
            >
              {project.name}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyDevopsProjects;
