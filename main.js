const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    
/* 'mousemove' wouldn't work for dynamically updating change on input so changed to 'input' */
inputs.forEach(input => input.addEventListener('input', handleUpdate));

/* inputs.forEach(input => input.addEventListener('change', handleUpdate)); */