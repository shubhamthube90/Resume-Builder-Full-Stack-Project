import TEMPLATE_ONE_IMG from '../assets/template-one.png'
import TEMPLATE_TWO_IMG from '../assets/template-two.png'
import TEMPLATE_THREE_IMG from '../assets/template-three.png'
import TEMPLATE_PLAIN_IMG from '../assets/template-plain.png'


export const resumeTemplates = [
  {
    id:'01',
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: 'themeOne',
    isPremium: false
  },
  {
    id:'02',
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: 'themeTwo',
    isPremium: true
  },
  {
    id:'03',
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: 'themeThree',
    isPremium: true
  },

  {
  id:'04',
  thumbnailImg: TEMPLATE_PLAIN_IMG,
  colorPaletteCode: 'themeOne',
  isPremium: false
}

]

export const themeColorPalette = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
  themeTwo: [
    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],
    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],
    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
  themeThree: [
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],
    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],
    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
  ]
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "",
    fullName: "Shubham Thube",
    designation: "Software Engineer",
    summary:
      "Passionate and results-driven developer with hands on experience building scalable web applications using modern technologies like Java, Spring Boot, Microservices, AWS.",
  },
  contactInfo: {
    email: "shubhamthube@gmail.com",
    phone: "+9874561230",
    location:'Pune, India',
    linkedin: "https://www.linkedin.com/in/shubham-thube-a0a07b259/",
    github: "https://github.com/shubhamthube90",
    website: "https://vercel.com/shubhams-projects-4f13969f",
  },
  workExperience: [
    {
      company: "IT Intern",
      role: "Daskshit Dolphin Designer Pvt.Ltd",
      startDate: "2024-07",
      endDate: "2024-10",
      description:
        "ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
    },
  ],
  education: [
    {
      degree: "B.E",
      institution: "NMU University",
      startDate: "2021-07",
      endDate: "2025-06",
    },
    {
      degree: "Higher Secondary Certified (HSC)",
      institution: "Vadilalbhau Rathod junior college",
      startDate: "2021",
      endDate: "2021",
    },
  ],
  skills: [
    { name: "Java", progress: 85 },
    { name: "React", progress: 90 },
    { name: "SQL", progress: 75 },
    { name: "Problem Solving", progress: 70 },
    { name: "MongoDB", progress: 75 },
  ],
  projects: [
    {
      title: "Currency-Convertor",
      description:
        "ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
      github: "https://github.com/shubhamthube90/Currency-Convertor",
    },
    {
      title: "Hotel-Booking",
      description:
        "ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
      liveDemo: "https://github.com/shubhamthube90/Hotel-Booking",
    },
  ],
  certifications: [
    {
      title: "Master In Full Stack Web Development In Java",
      issuer: "IT Vedant",
      year: "2026",
    },
  ],
  languages: [
    { name: "English", progress: 100 },
    { name: "Hindi", progress: 70 },
    { name: "Kannada", progress: 40 },
  ],
  interests: ["Playing", "Reading"],
};