module.exports = {
    'functional/no-try-statement': 'off',
    'functional/no-conditional-statement': 'off',
    'functional/immutable-data': [
        'warn',
        {
            assumeTypes: true,
            ignoreImmediateMutation: true,
            ignorePattern: ['exports', 'current', 'defaultProps', 'displayName'],
        },
    ],
}
