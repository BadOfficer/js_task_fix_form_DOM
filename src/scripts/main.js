'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputName = input.getAttribute('name');

    if (input.getAttribute('id') === null) {
      input.setAttribute('id', `input-${inputName}-${new Date().getTime()}`);
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.getAttribute('id'));
    label.textContent = inputName;
    input.parentElement.append(label);

    input.setAttribute(
      'placeholder',
      inputName[0].toUpperCase() + inputName.slice(1),
    );
  });
});
