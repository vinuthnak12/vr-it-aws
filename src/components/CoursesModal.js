'use client';
import { useState } from 'react';

export default function CoursesModal({ isOpen, onClose, onEnroll }) {
  const courses = [
    {
      id: 1,
      title: 'AWS Cloud Fundamentals',
      description: 'Master AWS core services and architecture patterns. Perfect for beginners wanting to start their cloud journey.',
      curriculum: [
        'AWS Account Setup & IAM',
        'EC2 - Elastic Compute Cloud',
        'S3 - Simple Storage Service',
        'VPC - Virtual Private Cloud',
        'Lambda & Serverless Computing',
        'RDS & Database Services',
        'CloudFormation Basics',
        'AWS Certification Preparation'
      ],
      color: 'blue'
    },
    {
      id: 2,
      title: 'AWS DevOps Engineering',
      description: 'Learn CI/CD, Infrastructure as Code, and automation using AWS DevOps tools and best practices.',
      curriculum: [
        'CodeCommit & Git Workflows',
        'CodeBuild & CodePipeline',
        'CodeDeploy Strategies',
        'CloudFormation & Terraform',
        'Docker Containerization',
        'EKS - Kubernetes on AWS',
        'Monitoring & Logging',
        'DevOps Best Practices'
      ],
      color: 'cyan'
    },
    {
      id: 3,
      title: 'AWS Data Engineering',
      description: 'Build scalable data pipelines and analytics solutions using comprehensive AWS data services.',
      curriculum: [
        'Data Architecture on AWS',
        'S3 & Data Lake Formation',
        'Glue - ETL Service',
        'Redshift Data Warehouse',
        'Kinesis Streaming',
        'Athena & QuickSight',
        'EMR & Big Data Processing',
        'Machine Learning Integration'
      ],
      color: 'purple'
    }
  ];

  if (!isOpen) return null;

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500/20 to-blue-600/20 border-blue-500/30';
      case 'cyan':
        return 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30';
      case 'purple':
        return 'from-purple-500/20 to-purple-600/20 border-purple-500/30';
      default:
        return 'from-blue-500/20 to-blue-600/20 border-blue-500/30';
    }
  };

  const getButtonColor = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-500';
      case 'cyan':
        return 'bg-cyan-600 hover:bg-cyan-500';
      case 'purple':
        return 'bg-purple-600 hover:bg-purple-500';
      default:
        return 'bg-blue-600 hover:bg-blue-500';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-slate-800 rounded-2xl border border-slate-600 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-600">
          <h2 className="text-3xl font-bold text-white">Our Training Programs</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-b ${getColorClasses(course.color)} p-6 backdrop-blur-sm border flex flex-col`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                </div>
                
                <div className="mb-6 flex-grow">
                  <h4 className="text-white font-semibold mb-3">Curriculum:</h4>
                  <ul className="space-y-2">
                    {course.curriculum.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <span className={`mr-2 ${course.color === 'blue' ? 'text-blue-400' : course.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => onEnroll(course.title)}
                  className={`w-full rounded-lg ${getButtonColor(course.color)} px-6 py-3 text-sm font-semibold text-white transition-colors mt-auto`}
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
