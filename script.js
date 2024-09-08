var submitBtn = document.getElementById("submit-btn");
var formContainer = document.getElementById("form-container");
var resumeContainer = document.getElementById("resume-container");
submitBtn.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var profession = document.getElementById("profession").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var experience = document.getElementById("experience").value;
  var education = document.getElementById("education").value;
  var skills = document.getElementById("skills").value.split(",");
  document.getElementById("resume-name").textContent = name;
  document.getElementById("resume-profession").textContent = profession;
  document.getElementById("resume-phone").textContent = phone;
  document.getElementById("resume-email").textContent = email;
  document.getElementById("resume-address").textContent = address;
  document.getElementById("resume-experience").textContent = experience;
  document.getElementById("resume-education").textContent = education;
  var skillsSection = document.getElementById("resume-skills");
  skillsSection.innerHTML = "";
  skills.forEach(function (skill) {
    var li = document.createElement("li");
    li.textContent = skill.trim();
    skillsSection.appendChild(li);
  });
});
