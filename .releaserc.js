const gitlabUrl = process.env.REPO_HOST_URL || 'http://gitlab.ru-central1.internal'
const gitlabApiPathPrefix = '/api/v4'
const repositoryUrl = process.env.PROJECT_REPO_URL || 'http://gitlab.ru-central1.internal/kk/ui.git'
const currentBranch = process.env.CI_COMMIT_REF_NAME

console.log('RELEASERC | process.env.PROJECT_REPO_URL', process.env.PROJECT_REPO_URL)
console.log('RELEASERC | process.env.REPO_HOST_URL', process.env.REPO_HOST_URL)
console.log('RELEASERC | process.env.CI_COMMIT_REF_NAME', process.env.CI_COMMIT_REF_NAME)

const IS_DEV = process.env.NODE_ENV === 'development'
const branches = [currentBranch || 'develop5', 'release5', 'test5']
const dummyPlugin = ['@semantic-release/exec']

const gitlabPlugin = IS_DEV
    ? dummyPlugin
    : [
          '@semantic-release/gitlab',
          {
              gitlabUrl,
              gitlabApiPathPrefix,
          },
      ]

const verifyConditions = [
    ['@semantic-release/changelog'],
    ['@semantic-release/npm'],
    [
        '@semantic-release/git',
        {
            assets: ['package.json', 'CHANGELOG.md'],
            message: 'chore(release): publish ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
    ],
    gitlabPlugin,
]
const analyzeCommits = [
    [
        '@semantic-release/commit-analyzer',
        {
            preset: 'angular',
            releaseRules: [
                { breaking: true, release: 'major' },
                { revert: true, release: 'patch' },
                { type: 'feat', release: 'minor' },
                { type: 'fix', release: 'patch' },
                { type: 'refactor', release: 'major' },
                { type: 'chore', release: false },
                { type: 'wip', release: false },
                { type: 'docs', release: false },
                { type: 'style', release: false },
                { type: 'perf', release: false },
                { type: 'test', release: false },
                { breaking: true, scope: '*-app', release: false },
                { revert: true, scope: '*-app', release: false },
                { type: 'feat', scope: '*-app', release: false },
                { type: 'fix', scope: '*-app', release: false },
                { type: 'refactor', scope: '*-app', release: false },
            ],
        },
    ],
]
const generateNotes = ['@semantic-release/release-notes-generator']
const prepare = [
    '@semantic-release/changelog',
    ['@semantic-release/npm'],
    [
        '@semantic-release/git',
        {
            message: 'chore(release): publish ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
    ],
]

const publish = [['@semantic-release/npm'], gitlabPlugin]

const verifyRelease = []
const fail = []
const success = []
const addChannel = []

module.exports = {
    repositoryUrl: repositoryUrl,
    branches,
    verifyConditions,
    analyzeCommits,
    verifyRelease,
    generateNotes,
    prepare,
    publish,
    fail,
    success,
    addChannel,
}
