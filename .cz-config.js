const branch = require('git-branch')
const fs = require('fs')

const currentBranch = branch.sync()
const dirPath = 'packages/'
const monorepoScopes = fs.readdirSync(__dirname + '/' + dirPath).map((fileName) => {
    return { name: fileName }
})

module.exports = {
    types: [
        { value: 'feat', name: 'feat:     A new feature (release: minor)' },
        { value: 'fix', name: 'fix:      A bug fix (release: patch)' },
        { value: 'docs', name: 'docs:     Documentation only changes' },
        {
            value: 'style',
            name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
        },
        {
            value: 'refactor',
            name: 'refactor: A code change that neither fixes a bug nor adds a feature (release: major)',
        },
        {
            value: 'perf',
            name: 'perf:     A code change that improves performance',
        },
        { value: 'test', name: 'test:     Adding missing tests' },
        {
            value: 'chore',
            name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
        },
        { value: 'revert', name: 'revert:   Revert to a commit (release: patch)' },
        { value: 'wip', name: 'wip:      Work in progress, use this while continuing a chain of commits' },
    ],

    scopes: [...monorepoScopes, { name: 'docs' }, { name: 'whole_repo/multiple_packages' }, { name: 'config' }, { name: 'ci' }],

    // allowTicketNumber: true,
    // isTicketNumberRequired: true,
    // ticketNumberPrefix: 'UW-',
    // ticketNumberRegExp: '\\d{1,5}',
    subjectSeparator: `: ${currentBranch} `,
    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: "Select the type of change that you're committing:",
        scope: '\nDenote the SCOPE of this change (optional):',
        // used if allowCustomScopes is true
        customScope: 'Denote the SCOPE of this change:',
        subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
        body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
        breaking: 'List any BREAKING CHANGES (optional):\n',
        footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
        confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix', 'refactor'],
    // skip any questions you want
    skipQuestions: ['body'],

    // limit subject length
    subjectLimit: 120,
    // breaklineChar: '|', // It is supported for fields body and footer.
    footerPrefix: 'Сloses:',
    // askForBreakingChangeFirst : true, // default is false
}
