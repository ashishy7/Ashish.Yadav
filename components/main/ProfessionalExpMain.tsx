import React from 'react'
import ProfessionalExpCard from '../sub/ProfessionalExpCard'
ProfessionalExpCard


export default function ProfessionalExpMain() {
  return (

    <div
    className="flex flex-col items-center justify-center py-20"
    id="projects"
    >
   
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
    PROFESSIONAL EXPERIENCE
    </h1>
    
    <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProfessionalExpCard
        title="Software Development Analyst"
        description={
            <>
               ●  Developed large-scale, distributed Java applications with 10+ REST APIs using Spring Boot and DynamoDB as a part of on-premises to cloud API migration, significantly increasing seller enrollments by 100k+ across 4 marketplaces.
              <br />
              ● Collaborated with a cross-functional team to create a web performance analytics tool, increasing efficiency by 21%..
              <br />
              ● Delivered advanced reporting and product ranking solutions, driving a remarkable 40% client business growth.
              <br />
              ● Built personalized UI (AngularJS) for seamless interaction with external CRM systems, enhancing data exchange by 20%.
              <br />
              ● Mentored peers, reviewed code/designs, resolved 20+ production-level issues, and followed Agile methodology.
              <br />
              ● Successfully led a highly esteemed team of 3 individuals to cost-saving initiative by identifying unused AWS resources and
establishing S3 bucket expiration policies, leading to an annual cost reduction exceeding $37,000 in AWS expenditures.
              <br />
              ● Reviewed code/designs, resolved 20+ production-level issues, and followed Agile methodology.
              <br />
              ● Integrated 10 vanilla JavaScript flow jobs within the ML platform, achieving a remarkable 90% increase in product query responses.
              <br />
              ● In charge of the Tech Review Process using Kanban (previously scrum) for the CRM platform, involving translating business requirements into technical requirements and design/development suggestions, initiating estimations.
            </>
          }
      />
      <ProfessionalExpCard
        title="Associate Software Engineer"
        description={
            <>
              ● Utilized React with Typescript to develop various UI components that efficiently handle labeling requests across various domains, including audio and text, driving a 15% increase in user engagement on the platform
              <br />
              ● Integrated 10 vanilla JavaScript flow jobs into the ML platform, resulting in a 90% increase in product search queries.
              <br />
              ● Achieved 80% test coverage using Enzyme and Jest for application test cases, following Test-Driven Development (TDD).
              <br />
              ● Support Lead overlooking SDLC for new features and issues resolution together with strategy development for issue resolution and weekly status reporting to the customer. Performed deployment planning and release documentation.
              <br />
              ● Optimized production job deployment by developing a high-impact script, reducing time by 30% for deployment.
              <br/>
              ● Implemented 3+ CI/CD workflows with Jenkins and Git, automating and reducing release & deployments time by 30%.
              <br />
              ● Attained a 40% performance improvement in an internal application by implementing the MVC design pattern,
utilizing the Dapper ORM, and incorporating caching techniques such as lazy loading, enhancing operational efficiency
              <br />
              ● Revitalized software development, transitioning search apps to monolithic codebases, resolving 50%+ environmental issues, and creating dynamic React web components for improved UI.
            </>
          }
      />
      </div>
      </div>
  )
}
