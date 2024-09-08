// Grabbing the DOM elements
var submitBtn = document.getElementById('submit-btn');
var formContainer = document.getElementById('form-container');
var resumeContainer = document.getElementById('resume-container');
var editBtn = document.getElementById('edit-btn');
// Event listener for the "Generate Resume" button
submitBtn.addEventListener('click', function () {
    // Collect form values
    var name = document.getElementById('name').value;
    var profession = document.getElementById('profession').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    // Populate resume with the input values
    document.getElementById('resume-name').textContent = name;
    document.getElementById('resume-profession').textContent = profession;
    document.getElementById('resume-phone').textContent = phone;
    document.getElementById('resume-email').textContent = email;
    document.getElementById('resume-address').textContent = address;
    document.getElementById('resume-experience').textContent = experience;
    document.getElementById('resume-education').textContent = education;
    // Populate the skills list
    var skillsSection = document.getElementById('resume-skills');
    skillsSection.innerHTML = ''; // Clear any previous skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsSection.appendChild(li);
    });
    // Hide form and show resume
    formContainer.style.display = 'none';
    resumeContainer.style.display = 'block';
});
// Event listener for the "Edit" button
editBtn.addEventListener('click', function () {
    // Show form and hide resume
    formContainer.style.display = 'block';
    resumeContainer.style.display = 'none';
});
