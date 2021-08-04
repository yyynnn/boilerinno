module.exports = {
    '*.{js,jsx,ts,tsx}': 'eslint',
    '*.json': ['prettier --write', 'git add --force'],
}
