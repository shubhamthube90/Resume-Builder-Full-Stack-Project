import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { formatYearMonth } from "../../utils/helper";

const SectionTitle = ({ title }) => (
  <div className="border-t border-gray-400 pt-4 mt-6 mb-2">
    <h3 className="text-sm tracking-widest font-bold text-gray-800">
      {title}
    </h3>
  </div>
);

const TemplatePlain = ({ resumeData }) => {
  if (!resumeData) return null;

  const {
    profileInfo = {},
    contactInfo = {},
    education = [],
    workExperience = [],
    skills = [],
  } = resumeData;

  return (
    <div className="bg-white p-10 text-gray-800 font-sans max-w-[800px] mx-auto">
      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-wide uppercase">
          {profileInfo.fullName || "YOUR NAME"}
        </h1>

        {profileInfo.designation && (
          <p className="text-sm mt-1">{profileInfo.designation}</p>
        )}

        <div className="flex justify-center gap-6 text-xs mt-3 text-gray-600 flex-wrap">
          {contactInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone size={14} /> {contactInfo.phone}
            </div>
          )}
          {contactInfo.email && (
            <div className="flex items-center gap-1">
              <Mail size={14} /> {contactInfo.email}
            </div>
          )}
          {contactInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} /> {contactInfo.location}
            </div>
          )}
        </div>
      </div>

      {/* ABOUT */}
      {profileInfo.summary && (
        <>
          <SectionTitle title="ABOUT ME" />
          <p className="text-sm leading-relaxed">
            {profileInfo.summary}
          </p>
        </>
      )}

      {/* EDUCATION */}
      {Array.isArray(education) && education.length > 0 && (
        <>
          <SectionTitle title="EDUCATION" />
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="text-sm font-medium">
                {edu.institution} |{" "}
                {formatYearMonth(edu.startDate)} -{" "}
                {formatYearMonth(edu.endDate)}
              </p>
              <p className="font-semibold">{edu.degree}</p>
            </div>
          ))}
        </>
      )}

      {/* WORK EXPERIENCE */}
      {Array.isArray(workExperience) && workExperience.length > 0 && (
        <>
          <SectionTitle title="WORK EXPERIENCE" />
          {workExperience.map((work, index) => (
            <div key={index} className="mb-4">
              <p className="text-sm font-medium">
                {work.company} |{" "}
                {formatYearMonth(work.startDate)} -{" "}
                {formatYearMonth(work.endDate)}
              </p>
              <p className="font-semibold">{work.role}</p>
              {work.description && (
                <p className="text-sm mt-1">{work.description}</p>
              )}
            </div>
          ))}
        </>
      )}

      {/* SKILLS */}
      {Array.isArray(skills) && skills.length > 0 && (
        <>
          <SectionTitle title="SKILLS" />
          <ul className="grid grid-cols-3 gap-2 text-sm list-disc pl-5">
            {skills.map((skill, index) => {
              const skillName =
                typeof skill === "string"
                  ? skill
                  : typeof skill === "object" && skill !== null
                  ? skill.name
                  : "";

              if (!skillName) return null;

              return <li key={index}>{skillName}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default TemplatePlain;
