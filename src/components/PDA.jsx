import React from 'react';
import './PDA.css'; // For specific styles if needed

function PDA() {
  return (
    <div className="container pda-page">
      
      <h2>Understanding Pathological Demand Avoidance (PDA) in Children</h2>
      <p className="lead">
        Pathological Demand Avoidance (PDA) is a behavioural profile characterised by an extreme avoidance of everyday demands and expectations. 
        Initially described by British developmental psychologist Elizabeth Newson in the 1980s, PDA is often discussed in the context of 
        autism spectrum disorder (ASD), though its classification remains a topic of debate.
      </p>

      <section className="mb-4">
        <h3>Key Characteristics of PDA</h3>
        <p>Children exhibiting PDA may display:</p>
        <ul>
          <li><strong>Obsessive resistance to everyday demands:</strong> Even routine activities can trigger avoidance behaviours.</li>
          <li><strong>Use of social strategies to avoid compliance:</strong> Such as distraction, negotiation, or withdrawal.</li>
          <li><strong>Sudden mood changes and impulsivity:</strong> Rapid shifts in emotional states are common.</li>
          <li><strong>Comfort with role play and pretending:</strong> Engaging in imaginative scenarios as a coping mechanism.</li>
        </ul>
        <p>These behaviours are often driven by high anxiety levels and a need for control over their environment.</p>
      </section>

      <section className="mb-4">
        <h3>PDA and Autism Spectrum Disorder</h3>
        <p>
          While PDA shares some characteristics with ASD, it is considered a distinct profile. Research indicates that PDA behaviours can be present in children 
          with ASD, but PDA is not a subtype of autism. A study in the Faroe Islands found that approximately 18% of individuals with ASD exhibited PDA 
          traits in childhood, though these traits often diminished by adulthood.
        </p>
        <p><strong>Reference:</strong> Gillberg, C., Gillberg, I.C., Thompson, L., Biskupsto, R., & Billstedt, E. (2015). Extreme ("pathological") demand avoidance in autism: A general population study in the Faroe Islands. <em>European Child & Adolescent Psychiatry, 24</em>, 979-984.</p>
        <p><a href="https://pubmed.ncbi.nlm.nih.gov/25398390/" target="_blank" rel="noopener noreferrer">Link: https://pubmed.ncbi.nlm.nih.gov/25398390/</a></p>
      </section>

      <section className="mb-4">
        <h3>The Role of Anxiety and Intolerance of Uncertainty</h3>
        <p>
          Anxiety and intolerance of uncertainty (IU) are central to understanding PDA. Children with PDA often experience heightened anxiety when faced 
          with unpredictable situations or demands. This anxiety can lead to behaviours aimed at increasing predictability and control. For example, 
          a study highlighted that demand-avoidant behaviours might be attempts to manage anxiety stemming from IU.
        </p>
        <p><strong>Reference:</strong> Stuart, L., Grahame, V., Honey, E., & Freeston, M. (2020). Intolerance of uncertainty and anxiety as explanatory frameworks for extreme demand avoidance in children and adolescents. <em>Child and Adolescent Mental Health, 25</em>(2), 59-67.</p>
        <p><a href="https://pubmed.ncbi.nlm.nih.gov/32307839/" target="_blank" rel="noopener noreferrer">Link: https://pubmed.ncbi.nlm.nih.gov/32307839/</a></p>
      </section>

      <section className="mb-4">
        <h3>Diagnostic Challenges and Controversies</h3>
        <p>
          PDA is not currently recognised as a separate diagnostic category in standard classification systems. This lack of formal recognition leads 
          to challenges in diagnosis and support. Some researchers argue that PDA should be viewed as a behavioural profile rather than a distinct disorder, 
          emphasising the need for individualised assessment and intervention strategies.
        </p>
        <p><strong>Reference:</strong> Kamp-Becker, I., Schu, U., & Stroth, S. (2023). Pathological Demand Avoidance: Current State of Research and Critical Discussion. <em>Z Kinder Jugendpsychiatr Psychother, 51</em>(4), 321-332.</p>
        <p><a href="https://pubmed.ncbi.nlm.nih.gov/36892327/" target="_blank" rel="noopener noreferrer">Link: https://pubmed.ncbi.nlm.nih.gov/36892327/</a></p>
      </section>

      <section className="mb-4">
        <h3>Implications for Intervention and Support</h3>
        <p>
          Understanding PDA as a profile associated with anxiety and a need for control has implications for intervention. Traditional behaviour 
          management strategies may be less effective. Instead, approaches that focus on reducing anxiety, increasing predictability, and 
          collaborating with a child are recommended. Tailored interventions that consider the unique needs of each child are crucial.
        </p>
      </section>

      <section className="mb-4">
        <h3>Conclusion</h3>
        <p>
          PDA represents a complex behavioural profile that intersects with anxiety, control, and social interaction challenges. While not formally 
          recognised in diagnostic manuals, acknowledging and understanding PDA can lead to more effective support strategies for affected individuals. 
          Continued research is essential to further elucidate PDA's characteristics and inform best practices for intervention.
        </p>
      </section>

      <section className="mb-4">
        <h3>Additional References</h3>
        <ul>
          <li>
            O'Nions, E., Gould, J., Christie, P., Gillberg, C., Viding, E., & Happé, F. (2016). Identifying features of 'pathological demand avoidance' using the Diagnostic Interview for Social and Communication Disorders (DISCO). <em>European Child & Adolescent Psychiatry, 25</em>(4), 407-419. 
            <a href="https://pubmed.ncbi.nlm.nih.gov/26224583/" target="_blank" rel="noopener noreferrer">(Link)</a>
          </li>
          <li>
            Green, J., Absoud, M., Grahame, V., Malik, O., Simonoff, E., Le Couteur, A., & Baird, G. (2018). Pathological Demand Avoidance: symptoms but not a syndrome. <em>The Lancet Child & Adolescent Health, 2</em>(9), 677-678. 
            <a href="https://pubmed.ncbi.nlm.nih.gov/30169286/" target="_blank" rel="noopener noreferrer">(Link)</a>
          </li>
          <li>
            O'Nions, E., Viding, E., Greven, C. U., Ronald, A., & Happé, F. (2014). Pathological demand avoidance: exploring the behavioural profile. <em>Autism, 18</em>(5), 538-544. 
            <a href="https://pubmed.ncbi.nlm.nih.gov/24104509/" target="_blank" rel="noopener noreferrer">(Link)</a>
          </li>
        </ul>
      </section>

    </div>
  );
}

export default PDA; 