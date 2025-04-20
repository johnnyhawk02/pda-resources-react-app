import React from 'react';
import './Dla.css'; // Import the CSS file

function Dla() {
  return (
    <div className="container dla-page">
      <h2>Disability Living Allowance (DLA) for Children</h2>
      <p className="lead">
        Disability Living Allowance (DLA) is a benefit for children under 16 who need extra looking after or have walking difficulties due to a 
        physical or mental disability. It is tax-free and not means-tested.
      </p>

      <section className="mb-4">
        <h3>Components of DLA</h3>
        <p>DLA has two parts (components), and a child might qualify for one or both:</p>
        <ul>
          <li><strong>Care Component:</strong> For children who need significantly more help or supervision with personal care than a non-disabled child of the same age. There are three rates: lowest, middle, and highest.</li>
          <li><strong>Mobility Component:</strong> For children who have difficulty walking or need guidance/supervision when outdoors. There are two rates: lower and higher.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>Eligibility</h3>
        <p>
          Eligibility depends on the level of help the child needs due to their disability. The child must generally have needed this help for at least 3 months 
          and be likely to need it for at least another 6 months (though there are special rules for terminally ill children).
        </p>
      </section>

      {/* Added Section for PDA specific considerations */}
      <section className="mb-4 pda-dla-section">
        <h3>DLA Considerations for Children with PDA</h3>
        <p>
          While DLA eligibility is based on the child's needs rather than their diagnosis, understanding how PDA traits manifest can be crucial when explaining these needs on the DLA form. The key is demonstrating how the child requires significantly more help or supervision than a non-disabled child of the <em>same age</em>.
        </p>

        <h4>Relating PDA to Care Component Needs:</h4>
        <p>Consider how PDA traits might impact needs related to attention (help with bodily functions like washing, dressing, eating) and supervision (keeping safe):</p>
        <ul>
          <li><strong>Demand Avoidance & Personal Care:</strong> Intense resistance to routine demands like washing, dressing, teeth brushing, or eating specific foods may require significantly more time, specific strategies (e.g., indirect prompts, negotiation), or physical assistance than peers.</li>
          <li><strong>High Anxiety & Reassurance:</strong> Constant high anxiety might necessitate frequent reassurance, co-regulation strategies, or specific support to manage emotional distress throughout the day and night.</li>
          <li><strong>Need for Control & Routine:</strong> Rigidity around routines or environments might require extensive preparation for changes, constant vigilance to prevent triggers, or specific support during transitions that peers wouldn't need.</li>
          <li><strong>Meltdowns/Shutdowns & Supervision:</strong> The risk of sudden, intense meltdowns or shutdowns triggered by perceived demands or overload might require constant supervision to ensure the child's safety and the safety of others, or to manage the aftermath.</li>
          <li><strong>Sleep Difficulties:</strong> Anxiety or sensory issues common in PDA can lead to significant sleep problems, requiring supervision or intervention during the night far beyond typical age expectations.</li>
          <li><strong>Sensory Sensitivities:</strong> Managing sensory sensitivities (e.g., related to food textures, clothing, noise) might require significant extra support with daily tasks.</li>
        </ul>

        <h4>Relating PDA to Mobility Component Needs (Lower Rate - Guidance/Supervision):</h4>
        <p>Consider how PDA traits might impact the need for guidance or supervision when outdoors on unfamiliar routes:</p>
        <ul>
          <li><strong>Impulsivity & Lack of Danger Awareness:</strong> Difficulty understanding or adhering to safety rules (e.g., road safety) combined with impulsivity can necessitate constant close supervision to prevent bolting into dangerous situations (considerably more than peers).</li>
          <li><strong>Anxiety in Unfamiliar Environments:</strong> Overwhelming anxiety triggered by new places, crowds, or sensory stimuli outdoors might lead to refusal to walk, attempts to flee, or meltdowns, requiring constant guidance and supervision for safety.</li>
          <li><strong>Unpredictable Behaviour:</strong> Sudden changes in behaviour or refusal to cooperate outdoors due to anxiety or perceived demands can make journeys unsafe without constant vigilance and support.</li>
        </ul>

        <p>
          <strong>Focus on Examples:</strong> When filling out the DLA form, provide detailed, real-life examples of these difficulties. Explain <em>how often</em> they happen, <em>what specific help</em> is needed, <em>how long it takes</em>, and how this compares to a child of the same age without the disability. Supporting evidence from professionals familiar with PDA can be very helpful.
        </p>
      </section>

      <section className="mb-4">
        <h3>Claiming DLA</h3>
        <p>
          You claim using the DLA1 Child form, which can be filled in online or printed from the gov.uk website. It's important to provide detailed information 
          about the child's needs and how their condition affects them. Supporting evidence from professionals (doctors, therapists, school) can be helpful.
        </p>
      </section>

      <section className="mb-4">
        <h3>Transition to PIP</h3>
        <p>
          DLA for children usually stops when the child turns 16. They will need to be assessed for Personal Independence Payment (PIP) instead. The DWP 
          should contact you before the child's 16th birthday.
        </p>
      </section>

      <section className="mb-4">
        <h3>Key Resources</h3>
        <ul>
          <li><a href="https://www.gov.uk/dla-disability-living-allowance-benefit/how-to-claim" target="_blank" rel="noopener noreferrer">GOV.UK - How to claim DLA for children</a></li>
          <li><a href="https://contact.org.uk/help-for-families/information-advice-services/benefits-financial-help/benefits-and-tax-credits/disability-living-allowance/" target="_blank" rel="noopener noreferrer">Contact Charity - DLA Information</a></li>
          <li><a href="https://cerebra.org.uk/download/disability-living-allowance-dla-guide/" target="_blank" rel="noopener noreferrer">Cerebra - DLA Guide</a></li>
          <li><a href="https://www.citizensadvice.org.uk/benefits/sick-or-disabled-people-and-carers/disability-living-allowance/" target="_blank" rel="noopener noreferrer">Citizens Advice - DLA Overview</a></li>
        </ul>
      </section>

      <p className="text-muted small">
        <em>Note: Benefit rules and forms can change. Always check the official gov.uk website for the most up-to-date information and forms. Consider seeking help from advice charities if you find the form difficult.</em>
      </p>
    </div>
  );
}

export default Dla; 