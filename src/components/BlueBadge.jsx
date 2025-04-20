import React from 'react';
import './BlueBadge.css'; // Import the CSS file

function BlueBadge() {
  return (
    <div className="container bluebadge-page">
      <h2>Blue Badge Scheme</h2>
      <p className="lead">
        The Blue Badge scheme helps people with severe mobility problems or certain hidden disabilities park closer to their destination. 
        It is available to eligible people regardless of whether they are travelling as a driver or passenger.
      </p>

      <section className="mb-4">
        <h3>Eligibility</h3>
        <p>Eligibility can be complex. You might be automatically eligible based on certain benefits or registrations, or you might need an assessment by your local council.</p>
        
        <h4>Automatic Eligibility</h4>
        <p>You may be automatically eligible (without further assessment) if you meet criteria such as:</p>
        <ul>
             <li>Receiving the higher rate mobility component of DLA.</li>
             <li>Receiving PIP points specifically for the 'Moving Around' activity (check current point requirements).</li>
             <li>Being registered blind.</li>
             <li>Receiving War Pensioners' Mobility Supplement or Armed Forces Compensation Scheme payments.</li>
        </ul>

        <h4>Eligibility Subject to Assessment</h4>
        <p>You may also be eligible subject to further assessment by your local council. This includes people who:</p>
        <ul>
          <li>Cannot walk at all or have considerable difficulty walking (due to physical disability, pain, breathlessness, or time taken).</li>
          <li>Drive regularly and have a severe disability in both arms making it difficult to operate parking meters.</li>
          <li>Are applying on behalf of a child under 3 with specific medical conditions requiring bulky equipment or proximity to a vehicle.</li>
          <li><strong>Have a non-visible (hidden) condition that causes significant difficulty or risk during journeys between a vehicle and a destination.</strong></li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>Eligibility for Children with Autism / PDA (Hidden Disabilities)</h3>
        <p>
          Many children with Autism or a PDA profile may qualify for a Blue Badge under the **non-visible (hidden) condition** criteria. This assesses whether the child experiences 
          "very considerable difficulty whilst walking, which may include very considerable psychological distress" or, crucially, if they "can be at risk of serious harm 
          when walking; or pose, when walking, a risk of serious harm to any other person".
        </p>
        <p>For children with PDA, demonstrating eligibility often focuses on the significant risks associated with their profile during journeys between a vehicle and a destination. Examples could include:</p>
        <ul>
          <li><strong>Lack of Road Safety Awareness:</strong> Impulsivity or difficulty processing/following safety instructions due to anxiety or demand avoidance, leading to a high risk of running into roads.</li>
          <li><strong>Tendency to Bolt or Wander:</strong> Unpredictable bolting into unsafe environments (e.g., car parks, busy streets) triggered by anxiety, sensory overload, or transitions, posing a direct danger.</li>
          <li><strong>Meltdowns or Shutdowns in Unsafe Locations:</strong> Intense distress triggered by demands or the environment (e.g., noise, crowds) leading to behaviours like dropping to the floor, physical resistance, or attempts to flee, creating hazardous situations near traffic or obstacles.</li>
          <li><strong>Demand Avoidance Regarding Safety Instructions:</strong> Extreme resistance to holding hands, staying close, or following directions related to safety, making it exceptionally difficult to navigate potentially hazardous environments like car parks safely.</li>
        </ul>
        <p>
          <strong>Important Evidence:</strong> Eligibility under this category requires a thorough assessment by the local council. Strong supporting evidence is crucial. This should come from professionals (e.g., Paediatricians, CAMHS, Clinical Psychologists, SENDCos, experienced Occupational Therapists) who understand the child's PDA profile. The evidence needs to detail specific examples of the *actual risks* faced during journeys and how these stem from the child's condition (e.g., citing specific incidents, frequency, triggers, and the level of supervision required to mitigate harm).
        </p>
      </section>

      <section className="mb-4">
        <h3>How to Apply</h3>
        <p>
          You apply for or renew a Blue Badge online via the GOV.UK website. The application will be processed by your local council. Be prepared to provide 
          detailed information about the difficulties faced and upload supporting evidence, especially when applying under the non-visible condition criteria.
        </p>
      </section>

      <section className="mb-4">
        <h3>Using the Badge</h3>
        <p>
          The Blue Badge must be displayed correctly on the dashboard. It allows parking in designated disabled bays and often permits parking on single or double yellow 
          lines for a limited time (check local rules). Misuse is illegal.
        </p>
      </section>

      <section className="mb-4">
        <h3>Key Resources</h3>
        <ul>
          <li><a href="https://www.gov.uk/government/publications/blue-badge-can-i-get-one/can-i-get-a-blue-badge-accessible" target="_blank" rel="noopener noreferrer">GOV.UK - Can I get a Blue Badge? (Detailed Eligibility)</a></li>
          <li><a href="https://www.gov.uk/apply-blue-badge" target="_blank" rel="noopener noreferrer">GOV.UK - Apply for or renew a Blue Badge</a></li>
          <li><a href="https://www.citizensadvice.org.uk/benefits/sick-or-disabled-people-and-carers/help-for-disabled-travellers/blue-badge-scheme/checking-if-you-qualify-for-a-blue-badge/" target="_blank" rel="noopener noreferrer">Citizens Advice - Checking if you qualify</a></li>
          <li><a href="https://contact.org.uk/help-for-families/information-advice-services/benefits-financial-help/other-benefits-and-entitlements/blue-badge-scheme/" target="_blank" rel="noopener noreferrer">Contact Charity - Blue Badge Scheme Information</a></li>
          <li><a href="https://www.autism.org.uk/advice-and-guidance/topics/transport/blue-badge-scheme" target="_blank" rel="noopener noreferrer">National Autistic Society - Blue Badge Scheme Guide</a></li>
          <li><a href="https://www.gov.uk/find-local-council" target="_blank" rel="noopener noreferrer">GOV.UK - Find your local council</a> (Essential for application and local rules)</li>
        </ul>
      </section>

      <p className="text-muted small">
        <em>Note: Eligibility criteria, required evidence, and local rules can vary. Always consult the official GOV.UK guidance and your local council's specific information. Applying under the non-visible disability criteria often requires thorough documentation.</em>
      </p>
    </div>
  );
}

export default BlueBadge; 