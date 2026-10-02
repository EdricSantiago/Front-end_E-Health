document.addEventListener('DOMContentLoaded', function () {
    var nameDisplay = document.getElementById('user-name-display');
    var genderDisplay = document.getElementById('user-gender-display');
    var ageDisplay = document.getElementById('user-age-display');

    var modal = document.getElementById('edit-modal');
    var form = document.getElementById('form-edit-profile');
    var inputName = document.getElementById('input-name');
    var inputGender = document.getElementById('input-gender');
    var inputAge = document.getElementById('input-age');

    var openBtns = document.querySelectorAll('.btn-open-modal');
    var closeBtn = document.getElementById('btn-modal-close');
    var cancelBtn = document.getElementById('btn-modal-cancel');

    var savedData = localStorage.getItem('profile_data');
    if (savedData) {
        try {
            var data = JSON.parse(savedData);
            if (data.name) nameDisplay.textContent = data.name;
            if (data.gender) genderDisplay.textContent = data.gender;
            if (data.age) ageDisplay.textContent = data.age + ' Tahun';
        } catch (e) {}
    }

    for (var i = 0; i < openBtns.length; i++) {
        openBtns[i].addEventListener('click', function (e) {
            e.preventDefault();
            inputName.value = nameDisplay.textContent.trim();
            inputGender.value = genderDisplay.textContent.trim();
            var currentAgeText = ageDisplay.textContent.trim();
            var currentAge = parseInt(currentAgeText, 10);
            inputAge.value = isNaN(currentAge) ? 26 : currentAge;

            modal.classList.add('active');
        });
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var nameVal = inputName.value.trim();
            var genderVal = inputGender.value;
            var ageVal = inputAge.value;

            if (!nameVal || !ageVal) return;

            nameDisplay.textContent = nameVal;
            genderDisplay.textContent = genderVal;
            ageDisplay.textContent = ageVal + ' Tahun';

            var profileObj = {
                name: nameVal,
                gender: genderVal,
                age: ageVal
            };

            localStorage.setItem('profile_data', JSON.stringify(profileObj));
            closeModal();
        });
    }
});