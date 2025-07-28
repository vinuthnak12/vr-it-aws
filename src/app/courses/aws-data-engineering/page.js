'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EnrollmentModal from '@/components/EnrollmentModal';

export default function AWSDataEngineering() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const router = useRouter();

  const handleEnrollment = () => {
    setEnrollmentModal(true);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="px-6 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <button
            onClick={handleEnrollment}
            className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-500 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-purple-500/10 px-4 py-2 text-purple-400 ring-1 ring-purple-500/20">
            <span className="text-sm font-medium">High Demand Field</span>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-6xl mb-6">
            AWS Data <span className="text-purple-400">Engineering</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Build scalable data pipelines, analytics solutions, and machine learning workflows using comprehensive AWS data services.
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
                This comprehensive course covers the entire data engineering lifecycle on AWS. You'll learn to design, build, and maintain robust data architectures that can handle massive scale and complex analytics workloads.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ideal for data professionals, software engineers, and analysts looking to transition into the high-demand field of data engineering with cloud-native solutions.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/30 p-8 backdrop-blur-sm border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-4">What You'll Build</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">📊</span>
                    <span className="text-gray-300">Scalable data lakes and warehouses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">🔄</span>
                    <span className="text-gray-300">Real-time streaming data pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">🤖</span>
                    <span className="text-gray-300">ML-powered analytics solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">📈</span>
                    <span className="text-gray-300">Interactive dashboards and reports</span>
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
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 1: Data Architecture Fundamentals</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Data Engineering Principles</li>
                <li>• Data Lake vs Data Warehouse</li>
                <li>• AWS Data Services Overview</li>
                <li>• Data Governance and Security</li>
                <li>• Cost Optimization Strategies</li>
              </ul>
            </div>

            {/* Module 2 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 2: Data Storage & Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• S3 Data Lake Design Patterns</li>
                <li>• Data Partitioning Strategies</li>
                <li>• AWS Lake Formation</li>
                <li>• Data Catalog and Metadata</li>
                <li>• Storage Classes and Lifecycle Policies</li>
              </ul>
            </div>

            {/* Module 3 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 3: Data Processing with AWS Glue</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Glue ETL Jobs and Workflows</li>
                <li>• Data Crawlers and Schema Discovery</li>
                <li>• PySpark Programming</li>
                <li>• Data Transformation Patterns</li>
                <li>• Job Monitoring and Optimization</li>
              </ul>
            </div>

            {/* Module 4 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 4: Data Warehousing with Redshift</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Redshift Architecture and Design</li>
                <li>• Data Modeling for Analytics</li>
                <li>• Performance Optimization Techniques</li>
                <li>• Redshift Spectrum for Data Lakes</li>
                <li>• Backup and Disaster Recovery</li>
              </ul>
            </div>

            {/* Module 5 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 5: Real-time Data Streaming</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Amazon Kinesis Data Streams</li>
                <li>• Kinesis Data Firehose</li>
                <li>• Kinesis Analytics and SQL</li>
                <li>• Real-time Processing Patterns</li>
                <li>• Stream Monitoring and Troubleshooting</li>
              </ul>
            </div>

            {/* Module 6 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 6: Analytics and Querying</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Amazon Athena Serverless Queries</li>
                <li>• Query Optimization Techniques</li>
                <li>• Data Formats (Parquet, ORC, Avro)</li>
                <li>• Federated Queries</li>
                <li>• Cost Management for Analytics</li>
              </ul>
            </div>

            {/* Module 7 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 7: Big Data Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Amazon EMR Clusters</li>
                <li>• Apache Spark on AWS</li>
                <li>• Hadoop Ecosystem Integration</li>
                <li>• Serverless Analytics Options</li>
                <li>• Performance Tuning and Scaling</li>
              </ul>
            </div>

            {/* Module 8 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 8: Machine Learning Integration</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Amazon SageMaker for ML Pipelines</li>
                <li>• Feature Engineering at Scale</li>
                <li>• Model Training and Deployment</li>
                <li>• MLOps on AWS</li>
                <li>• AI Services Integration</li>
              </ul>
            </div>

            {/* Module 9 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 9: Data Visualization</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Amazon QuickSight Setup</li>
                <li>• Dashboard Design Best Practices</li>
                <li>• Interactive Analytics</li>
                <li>• Embedded Analytics</li>
                <li>• Third-party Integration (Tableau, Power BI)</li>
              </ul>
            </div>

            {/* Module 10 */}
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Module 10: Workflow Orchestration</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS Step Functions for Data Workflows</li>
                <li>• Apache Airflow on AWS</li>
                <li>• Event-driven Data Processing</li>
                <li>• Error Handling and Retry Logic</li>
                <li>• Monitoring and Alerting</li>
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
            <div className="rounded-xl bg-gradient-to-b from-purple-500/10 to-purple-600/20 p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Project 1: Data Lake Analytics Platform</h3>
              <p className="text-gray-300 mb-4">Build a complete data lake solution for a retail company with real-time analytics and ML insights.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-source data ingestion</li>
                <li>• Automated ETL pipelines</li>
                <li>• Interactive dashboards</li>
                <li>• Predictive analytics models</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-purple-500/10 to-purple-600/20 p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Project 2: Real-time IoT Data Pipeline</h3>
              <p className="text-gray-300 mb-4">Design a streaming data architecture for IoT sensor data with real-time monitoring and alerts.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Kinesis streaming setup</li>
                <li>• Real-time anomaly detection</li>
                <li>• Time-series data storage</li>
                <li>• Operational dashboards</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-purple-500/10 to-purple-600/20 p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Project 3: Enterprise Data Warehouse</h3>
              <p className="text-gray-300 mb-4">Implement a modern data warehouse solution with dimensional modeling and self-service analytics.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Redshift cluster optimization</li>
                <li>• Star schema implementation</li>
                <li>• ETL automation</li>
                <li>• Business intelligence integration</li>
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
                <h3 className="text-xl font-bold text-purple-400 mb-4">Required Knowledge</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AWS Cloud fundamentals</li>
                  <li>• SQL and database concepts</li>
                  <li>• Python programming experience</li>
                  <li>• Understanding of data structures</li>
                  <li>• Basic statistics and analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Recommended Experience</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 1+ years of data-related work</li>
                  <li>• Experience with data analysis tools</li>
                  <li>• Understanding of ETL processes</li>
                  <li>• Familiarity with business intelligence</li>
                  <li>• Basic machine learning concepts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Shape the Future with Data</h2>
          <p className="text-lg text-gray-400 mb-8">
            Become a skilled data engineer and unlock the power of data-driven decision making at scale.
          </p>
          <button
            onClick={handleEnrollment}
            className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200"
          >
            Enroll in AWS Data Engineering
          </button>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal 
        isOpen={enrollmentModal} 
        onClose={() => setEnrollmentModal(false)} 
        courseName="AWS Data Engineering"
      />
    </div>
  );
}
