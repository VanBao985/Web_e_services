/* Define necessary functions */
const setTitle = (data) => {
  document.title = `${data.title} | ${data.name}`;
  document.querySelector("#profileName").innerHTML = data.name;
  document.querySelector("#profileSubTitle").innerHTML = data.sub_title;
  document.querySelector("#aboutIntro").innerHTML = data.about.intro;
  document.querySelector("#contactEmail").innerHTML = data.about.contact.email;
  document
    .querySelector("#contactEmail")
    .setAttribute("href", `mailto:${data.about.contact.email}`);
  document.querySelector("#contactPhone").innerHTML = data.about.contact.phone;
};

const setLinks = (links) => {
  const linksList = document.querySelector("#linksList");
  links.forEach((link) => {
    const linkItem = document.createElement("div");
    linkItem.className = "contact-item";
    
    const title = document.createElement("span");
    title.className = "contact-logo";

    const icon = document.createElement("i");
    icon.className = link.iconClass;
    title.appendChild(icon);
    
    linkItem.appendChild(title);
    
    const a = document.createElement("a");
    a.className = "link-src contact-info";
    a.href = link.src;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerText = link.title;
    
    linkItem.appendChild(a);
    linksList.appendChild(linkItem);
  });
};

const setExperience = (experiences) => {
  const expList = document.querySelector("#experienceList");
  experiences.forEach((exper) => {
    const expListItem = document.createElement("li");

    const expItem = document.createElement("div");
    expItem.className = "exp-item";

    const expOrg = document.createElement("span");
    expOrg.className = "exp-org";
    expOrg.innerHTML = exper.organization;
    expItem.appendChild(expOrg);

    const expTitle = document.createElement("span");
    expTitle.className = "exp-title";
    expTitle.innerHTML = `&nbsp;- ${exper.title}`;
    
    const expDura = document.createElement("span");
    expDura.className = "exp-title";
    expDura.innerText = `, (${exper.date})`;
    
    expItem.appendChild(expTitle);
    expItem.appendChild(expDura);
    expListItem.appendChild(expItem);
    
    if (exper.details) {
      const expDetails = document.createElement("ul");
      expDetails.className = "expDet";
      
      exper.details.forEach((dText) => {
        const detItem = document.createElement("li");
        detItem.innerHTML = dText;
        expDetails.appendChild(detItem);
      });
      
      expListItem.appendChild(expDetails);
    }

    expList.appendChild(expListItem);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.id = "toggleLayoutBtn";
  toggleButton.innerText = "Toggle Layout";
  toggleButton.style.display = "block";
  toggleButton.style.margin = "20px auto";
  document.body.appendChild(toggleButton);

  let isColumnLayout = false;

  toggleButton.addEventListener("click", () => {
    const container = document.querySelector(".container");
    if (isColumnLayout) {
      container.classList.remove("two-column-layout");
    } else {
      container.classList.add("two-column-layout");
    }
    isColumnLayout = !isColumnLayout;
  });
});


// Entry Function, IIFE
(() => {
  setTitle(profileData);
  setLinks(profileData.links);
  setExperience(profileData.experiences);
})();