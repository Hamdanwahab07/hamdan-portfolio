
import React from 'react';
import { portfolioData } from './constants/portfolioData';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import SkillBadge from './components/SkillBadge';
import Footer from './components/Footer';
import { CertificateIcon, CodeBracketIcon, AcademicCapIcon, BriefcaseIcon, StarIcon, ChatBubbleLeftRightIcon, CpuChipIcon } from './components/Icons';

const App: React.FC = () => {
  const { profile, summary, experience, education, certificates, achievements, skills } = portfolioData;

  const sections = [
    { id: 'experience', title: 'Experience', Icon: BriefcaseIcon },
    { id: 'education', title: 'Education', Icon: AcademicCapIcon },
    { id: 'skills', title: 'Skills', Icon: CodeBracketIcon },
    { id: 'certificates', title: 'Certificates', Icon: CertificateIcon },
    { id: 'achievements', title: 'Achievements', Icon: StarIcon },
  ];

  return (
    <div className="bg-black text-gray-300 font-sans antialiased">
      <Header name={profile.name} title={profile.title} social={profile.social} navLinks={sections} />

      <main className="container mx-auto px-6 md:px-12 lg:px-24 py-12 pt-24 md:pt-32">
        {/* Summary Section */}
        <Section id="summary" title="Summary" Icon={CpuChipIcon}>
          <p className="text-lg leading-relaxed text-gray-400">
            {summary}
          </p>
        </Section>
        
        {/* Experience Section */}
        <Section id="experience" title="Experience" Icon={BriefcaseIcon}>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <ExperienceCard key={index} {...job} />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education" Icon={AcademicCapIcon}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </Section>
        
        {/* Skills Section */}
        <Section id="skills" title="Skills" Icon={CodeBracketIcon}>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-100 mb-4 capitalize">{category.replace(/_/g, ' ')}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </Section>

        {/* Certificates Section */}
        <Section id="certificates" title="Certificates" Icon={CertificateIcon}>
          <ul className="space-y-4">
            {certificates.map((cert, index) => (
              <li key={index} className="transform transition-transform duration-300 hover:scale-105 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-500">
                <p className="text-lg font-medium text-gray-200">{cert.title}</p>
                <p className="text-sm text-gray-400">{cert.issuer} - {cert.year}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Achievements Section */}
        <Section id="achievements" title="Achievements" Icon={StarIcon}>
           <ul className="space-y-4 list-disc list-inside">
            {achievements.map((ach, index) => (
              <li key={index} className="text-lg text-gray-400">{ach}</li>
            ))}
          </ul>
        </Section>

      </main>
      
      <Footer social={profile.social} email={profile.email} name={profile.name} />
    </div>
  );
};

export default App;
