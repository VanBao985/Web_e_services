const profileData = {
  title: "CV",
  name: "CAO VAN BAO",
  sub_title: "AI Engineer",
  about: {
    intro: `
    LUCKY NUMBER OF DAY: ${Math.floor(Math.random() * 100)}<br>
    STUDENT AT HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY.<br>
    STUDENT ID: 20225166<br>
    FULL NAME: CAO VAN BAO<br>
    CGPA: 3.92/4.0<br>
    DATE OF BIRTH: 21/03/2004`,
    contact: {
      email: "caovanbao21304@gmail.com",
      phone: "0035262310",
      address: "HaNoi, VietNam",
    },
  },
  links: [
    {
      title: "Facebook",
      src: "https://www.facebook.com/vanbaobato95",
    },
    {
      title: "Github",
      src: "https://github.com/vanbao985",
    },
  ],
  experiences: [
    {
      organization: "SKILLS",
      title: "AI Engineer",
      date: "Dec 2022 - Present",
      details: [
        `Python, Machine Learning, Deep Learning.`,
        `HTML5+CSS3+JavaScript.`,
        ],
    },
    {
      organization: "EDUCATION",
      title: `STUDYING`,
      date: "Jun 2019 - Present",
      details: [
        `HaNoi University of Science and Technology.`,
        `Major: Computer Science.`,
        `Kim Lien High School.`,
        `Major: Natural Science.`,
      ],
    },
  ],
};
