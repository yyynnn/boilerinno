module.exports = {
    hooks: {
        // 'pre-commit':
        //   'echo "linting gitlab config: .gitlab-ci.yml" && npx gitlab-ci-lint', // - gitlab config lint
        'pre-commit': 'lint-staged',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    },
}
