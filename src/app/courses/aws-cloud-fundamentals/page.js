'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function AWSCloudFundamentals() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const router = useRouter();

  const handleEnrollment = () => {
    setEnrollmentModal(true);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="px-6 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <button
            onClick={handleEnrollment}
            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-blue-400 ring-1 ring-blue-500/20">
            <span className="text-sm font-medium">Most Popular Course</span>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-6xl mb-6">
            AWS Cloud <span className="text-blue-400">Fundamentals</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Master the foundational concepts of Amazon Web Services and build your cloud computing expertise from the ground up.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Course Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                This comprehensive course is designed for beginners who want to understand cloud computing fundamentals and gain hands-on experience with AWS core services. You&apos;ll learn essential concepts, best practices, and practical skills needed to work with AWS in real-world scenarios.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By the end of this course, you&apos;ll be confident in deploying, managing, and optimizing AWS resources, and you&apos;ll be well-prepared for AWS certification exams.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 p-8 backdrop-blur-sm border border-blue-500/30">
                <h3 className="text-xl font-bold text-white mb-4">What You&apos;ll Achieve</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">🎯</span>
                    <span className="text-gray-300">Build and deploy applications on AWS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">🛡️</span>
                    <span className="text-gray-300">Implement security best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">📊</span>
                    <span className="text-gray-300">Monitor and optimize AWS costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">🏆</span>
                    <span className="text-gray-300">Prepare for AWS certification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Detailed Curriculum</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Module 1 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Module 1: Cloud Computing Basics</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Introduction to Cloud Computing</li>
                <li>• AWS Global Infrastructure</li>
                <li>• AWS Management Console</li>
                <li>• AWS CLI Setup & Configuration</li>
                <li>• AWS Account & Billing Overview</li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Module 2: Identity & Access Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• IAM Users, Groups, and Roles</li>
                <li>• IAM Policies and Permissions</li>
                <li>• Multi-Factor Authentication</li>
                <li>• AWS Organizations</li>
                <li>• Security Best Practices</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Module 3: Compute Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• EC2 Instances and Instance Types</li>
                <li>• AMIs and User Data</li>
                <li>• Security Groups and Key Pairs</li>
                <li>• Elastic Load Balancing</li>
                <li>• Auto Scaling Groups</li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Module 4: Storage Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• S3 Buckets and Objects</li>
                <li>• S3 Storage Classes</li>
                <li>• EBS Volumes and Snapshots</li>
                <li>• EFS - Elastic File System</li>
                <li>• Storage Gateway</li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Module 5: Networking</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• VPC - Virtual Private Cloud</li>
                <li>• Subnets and Route Tables</li>
                <li>• Internet and NAT Gateways</li>
                <li>• VPC Peering and Transit Gateway</li>
                <li>• CloudFront CDN</li>
              </ul>
            </div>

            {/* Module 6 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Module 6: Database Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• RDS - Relational Database Service</li>
                <li>• DynamoDB - NoSQL Database</li>
                <li>• ElastiCache for Caching</li>
                <li>• Database Migration Service</li>
                <li>• Backup and Recovery</li>
              </ul>
            </div>

            {/* Module 7 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Module 7: Serverless Computing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS Lambda Functions</li>
                <li>• API Gateway</li>
                <li>• EventBridge and SNS</li>
                <li>• SQS - Simple Queue Service</li>
                <li>• Serverless Architecture Patterns</li>
              </ul>
            </div>

            {/* Module 8 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Module 8: Monitoring & Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CloudWatch Metrics and Alarms</li>
                <li>• CloudTrail for Auditing</li>
                <li>• AWS Config for Compliance</li>
                <li>• Cost Optimization Strategies</li>
                <li>• Well-Architected Framework</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on Projects */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Hands-on Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="rounded-xl bg-gradient-to-b from-blue-500/10 to-blue-600/20 p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Project 1: Web Application Hosting</h3>
              <p className="text-gray-300 mb-4">Deploy a scalable web application using EC2, RDS, and ELB with proper security configurations.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-tier architecture</li>
                <li>• Load balancing setup</li>
                <li>• Database configuration</li>
                <li>• Security group rules</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-blue-500/10 to-blue-600/20 p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Project 2: Serverless API</h3>
              <p className="text-gray-300 mb-4">Build a serverless REST API using Lambda, API Gateway, and DynamoDB for a real-world application.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Lambda function development</li>
                <li>• API Gateway setup</li>
                <li>• DynamoDB integration</li>
                <li>• Authentication & authorization</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-blue-500/10 to-blue-600/20 p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Project 3: Static Website with CDN</h3>
              <p className="text-gray-300 mb-4">Create a high-performance static website using S3, CloudFront, and Route 53 with custom domain.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• S3 static hosting</li>
                <li>• CloudFront distribution</li>
                <li>• Custom domain setup</li>
                <li>• SSL certificate configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Prerequisites</h2>
          
          <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Required Knowledge</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Basic computer literacy</li>
                  <li>• Understanding of internet concepts</li>
                  <li>• Familiarity with operating systems</li>
                  <li>• Basic networking concepts (helpful but not required)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">What You Need</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Computer with internet connection</li>
                  <li>• AWS account (we&apos;ll help you set up)</li>
                  <li>• Willingness to learn and practice</li>
                  <li>• Dedication to complete hands-on labs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your AWS Journey?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Join hundreds of students who have successfully launched their cloud careers with this course.
          </p>
          <button
            onClick={handleEnrollment}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-200"
          >
            Enroll in AWS Cloud Fundamentals
          </button>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={enrollmentModal} 
        onClose={() => setEnrollmentModal(false)} 
        courseName="AWS Cloud Fundamentals"
      />
    </div>
  );
}
