/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const execa = require('execa')
const prompts = require('prompts')

const questions = [
    {
        type: 'select',
        name: 'app',
        message: '🎮 Select application',
        choices: [{ title: 'root', value: 'root' }],
    },
    {
        type: 'select',
        name: 'hmr',
        message: '⚡️ Turn on HMR?',
        initial: 0,
        choices: [
            { title: 'on', value: 'on' },
            { title: 'off', value: 'off' },
        ],
    },
    {
        type: (prevChoice) => (prevChoice === 'off' ? 'select' : null),
        name: 'liveReload',
        message: '⚣ Turn off Live Reload?',
        initial: 0,
        choices: [
            { title: 'off', value: 'off' },
            { title: 'on', value: 'on' },
        ],
    },
]

;(async () => {
    const result = await prompts(questions)

    try {
        execa(
            `cross-env STAGE=${result.stage} HMR=${result.hmr || 'off'} SMP=${result.smp || 'off'} STATS=${result.stats} MF=${
                result.mf
            } LIVE_RELOAD=${result.liveReload || 'off'} NODE_ENV=development webpack-cli serve --json stats.json --config packages/${
                result.app
            }-app/webpack/webpack.dev.babel.js`,
            {
                shell: true,
                stdio: 'inherit',
            }
        )
    } catch (error) {
        console.log(error)
    }
})()
