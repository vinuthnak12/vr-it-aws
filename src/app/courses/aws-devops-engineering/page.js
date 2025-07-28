'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function AWSDevOpsEngineering() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const router = useRouter();

  const handleEnrollment = () => {
    setEnrollmentModal(true);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Navigation */}
      <nav className="px-6 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <button
            onClick={handleEnrollment}
            className="rounded-lg bg-cyan-600 px-6 py-2 text-sm font-semibold text-white hover:bg-cyan-500 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400 ring-1 ring-cyan-500/20">
            <span className="text-sm font-medium">Advanced Level</span>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-6xl mb-6">
            AWS DevOps <span className="text-cyan-400">Engineering</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Master CI/CD pipelines, Infrastructure as Code, and automation using AWS DevOps tools to accelerate software delivery.
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
                This advanced course focuses on DevOps practices and automation using AWS services. You'll learn to build robust CI/CD pipelines, implement Infrastructure as Code, and automate deployment processes for modern applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Perfect for developers, system administrators, and IT professionals looking to streamline software delivery and embrace DevOps culture in cloud environments.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 p-8 backdrop-blur-sm border border-cyan-500/30">
                <h3 className="text-xl font-bold text-white mb-4">What You'll Master</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">🚀</span>
                    <span className="text-gray-300">Build automated CI/CD pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">🏗️</span>
                    <span className="text-gray-300">Infrastructure as Code with CloudFormation & Terraform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">🐳</span>
                    <span className="text-gray-300">Container orchestration with EKS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">📊</span>
                    <span className="text-gray-300">Monitoring and logging strategies</span>
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
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Module 1: DevOps Fundamentals</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• DevOps Culture and Principles</li>
                <li>• Continuous Integration/Continuous Deployment</li>
                <li>• Version Control with Git</li>
                <li>• Agile and DevOps Methodologies</li>
                <li>• AWS DevOps Tools Overview</li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Module 2: Source Control & Code Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS CodeCommit Setup</li>
                <li>• Git Workflows and Branching Strategies</li>
                <li>• Code Review Processes</li>
                <li>• Integration with GitHub/GitLab</li>
                <li>• Security and Access Controls</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Module 3: Build Automation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS CodeBuild Configuration</li>
                <li>• Build Specifications (buildspec.yml)</li>
                <li>• Multi-stage Builds</li>
                <li>• Artifact Management</li>
                <li>• Build Optimization Techniques</li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Module 4: CI/CD Pipelines</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS CodePipeline Design</li>
                <li>• Pipeline Stages and Actions</li>
                <li>• Automated Testing Integration</li>
                <li>• Deployment Strategies</li>
                <li>• Pipeline Monitoring and Troubleshooting</li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Module 5: Deployment Automation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS CodeDeploy Configuration</li>
                <li>• Blue/Green Deployments</li>
                <li>• Rolling Deployments</li>
                <li>• Canary Releases</li>
                <li>• Rollback Strategies</li>
              </ul>
            </div>

            {/* Module 6 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Module 6: Infrastructure as Code</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS CloudFormation Templates</li>
                <li>• Terraform with AWS Provider</li>
                <li>• CDK (Cloud Development Kit)</li>
                <li>• Template Management and Versioning</li>
                <li>• Cross-Region Deployments</li>
              </ul>
            </div>

            {/* Module 7 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Module 7: Containerization & Orchestration</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Docker Fundamentals</li>
                <li>• Amazon ECR (Elastic Container Registry)</li>
                <li>• ECS (Elastic Container Service)</li>
                <li>• EKS (Elastic Kubernetes Service)</li>
                <li>• Fargate Serverless Containers</li>
              </ul>
            </div>

            {/* Module 8 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Module 8: Monitoring & Logging</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CloudWatch Metrics and Dashboards</li>
                <li>• Application Performance Monitoring</li>
                <li>• Log Aggregation and Analysis</li>
                <li>• X-Ray Distributed Tracing</li>
                <li>• Alerting and Incident Response</li>
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
            <div className="rounded-xl bg-gradient-to-b from-cyan-500/10 to-cyan-600/20 p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Project 1: Full CI/CD Pipeline</h3>
              <p className="text-gray-300 mb-4">Build an end-to-end CI/CD pipeline for a microservices application with automated testing and deployment.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-service repository setup</li>
                <li>• Automated testing stages</li>
                <li>• Blue/green deployment</li>
                <li>• Monitoring integration</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-cyan-500/10 to-cyan-600/20 p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Project 2: Infrastructure as Code</h3>
              <p className="text-gray-300 mb-4">Deploy a complete application infrastructure using CloudFormation and Terraform with version control.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• VPC and networking setup</li>
                <li>• Auto-scaling configuration</li>
                <li>• Database provisioning</li>
                <li>• Security configurations</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-cyan-500/10 to-cyan-600/20 p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Project 3: Kubernetes on AWS</h3>
              <p className="text-gray-300 mb-4">Deploy and manage containerized applications using EKS with automated scaling and monitoring.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• EKS cluster setup</li>
                <li>• Application deployment</li>
                <li>• Horizontal pod autoscaling</li>
                <li>• Service mesh implementation</li>
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
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Required Knowledge</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AWS Cloud Fundamentals</li>
                  <li>• Linux/Unix command line</li>
                  <li>• Programming experience (Python, Java, or Node.js)</li>
                  <li>• Basic understanding of software development lifecycle</li>
                  <li>• Familiarity with version control (Git)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Recommended Experience</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 6+ months of AWS experience</li>
                  <li>• System administration background</li>
                  <li>• Understanding of networking concepts</li>
                  <li>• Experience with scripting languages</li>
                  <li>• Basic Docker knowledge (helpful)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Accelerate Your DevOps Career</h2>
          <p className="text-lg text-gray-400 mb-8">
            Join the ranks of skilled DevOps engineers who are transforming software delivery with AWS.
          </p>
          <button
            onClick={handleEnrollment}
            className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-200"
          >
            Enroll in AWS DevOps Engineering
          </button>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={enrollmentModal} 
        onClose={() => setEnrollmentModal(false)} 
        courseName="AWS DevOps Engineering"
      />
    </div>
  );
}
