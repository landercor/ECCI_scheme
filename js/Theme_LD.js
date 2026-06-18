//Al cargar la página, aplicar el tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-bs-theme', savedTheme);

//Al hacer click, cambiar y guardar el nuevo tema
document.getElementById('btnSwitch').addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});