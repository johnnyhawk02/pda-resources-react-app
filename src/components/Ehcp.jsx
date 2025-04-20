import React from 'react';
import './Ehcp.css'; // Import the CSS file

function Ehcp() {
  return (
    <div className="container ehcp-page">
      <h2>Education, Health and Care Plans (EHCP)</h2>
      <p className="lead">
        An Education, Health and Care Plan (EHCP) is a legal document for children and young people aged up to 25 who need more support than is available 
        through special educational needs support provided by mainstream schools or colleges.
      </p>

      <section className="mb-4">
        <h3>What is an EHCP?</h3>
        <p>
          It outlines a child or young person's special educational, health, and social care needs, the support required to meet those needs (known as 'provision'), 
          and the desired outcomes. The plan is created by the local authority (LA) in collaboration with the family and relevant professionals.
        </p>
      </section>

      <section className="mb-4">
        <h3>Who Needs an EHCP?</h3>
        <p>
          An EHCP is for children and young people with significant and complex Special Educational Needs or Disabilities (SEND) where the LA determines 
          that the provision required cannot reasonably be provided from the resources normally available to mainstream settings.
        </p>
      </section>

      <section className="mb-4">
        <h3>The EHCP Process</h3>
        <p>The process typically involves:</p>
        <ul>
          <li><strong>Requesting an EHC Needs Assessment:</strong> Parents, the young person (if over 16), or the school/college can request an assessment from the LA.</li>
          <li><strong>LA Decision:</strong> The LA decides whether an assessment is necessary (usually within 6 weeks).</li>
          <li><strong>Assessment:</strong> If agreed, the LA gathers information from parents, the child/young person, the educational setting, and relevant health/care professionals.</li>
          <li><strong>Decision to Issue a Plan:</strong> Based on the assessment, the LA decides whether to issue an EHCP.</li>
          <li><strong>Draft Plan & Finalisation:</strong> If issuing a plan, a draft is sent for review before being finalised (the whole process should take a maximum of 20 weeks).</li>
          <li><strong>Annual Review:</strong> Once finalised, the EHCP must be reviewed by the LA at least once a year.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>Key Resources</h3>
        <ul>
          <li><a href="https://www.gov.uk/children-with-special-educational-needs/extra-SEN-help" target="_blank" rel="noopener noreferrer">GOV.UK - Children with special educational needs and disabilities (SEND)</a></li>
          <li><a href="https://www.ipsea.org.uk/ehc-needs-assessments" target="_blank" rel="noopener noreferrer">IPSEA - EHC Needs Assessments</a></li>
          <li><a href="https://contact.org.uk/help-for-families/information-advice-services/education-learning/ehc-plans/" target="_blank" rel="noopener noreferrer">Contact Charity - Education, Health and Care plans</a></li>
          <li><a href="https://www.gov.uk/find-local-council" target="_blank" rel="noopener noreferrer">GOV.UK - Find your local council</a> (for specific local authority SEND information / Local Offer)</li>
          <li><a href="https://councilfordisabledchildren.org.uk/information-advice-and-support-services-network/find-your-local-ias-service" target="_blank" rel="noopener noreferrer">Find your local SENDIASS</a> (Special Educational Needs and Disabilities Information Advice and Support Service)</li>
        </ul>
      </section>

      <p className="text-muted small">
        <em>Note: This information provides a general overview. The EHCP process can be complex, and seeking advice from your local SENDIASS or organisations like IPSEA is recommended.</em>
      </p>
    </div>
  );
}

export default Ehcp; 