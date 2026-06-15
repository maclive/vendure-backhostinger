import { bootstrap, bootstrapWorker, runMigrations } from '@vendure/core';
import { config } from './vendure-config';

runMigrations(config)
    .then(() => bootstrap(config))
    .then(app => {
        const workerConfig = {
            ...config,
            plugins: config.plugins?.filter(
                (p: any) => p?.constructor?.name !== 'DefaultSchedulerPlugin'
            ),
        };
        return bootstrapWorker(workerConfig);
    })
    .then(worker => worker.startJobQueue())
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
