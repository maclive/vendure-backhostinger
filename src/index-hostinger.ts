import { bootstrap, bootstrapWorker, runMigrations } from '@vendure/core';
import { config } from './vendure-config';

/**
 * نقطة دخول واحدة تشغّل السيرفر والـ Worker معاً في عملية واحدة.
 * مطلوبة على Hostinger Node.js Apps لأنها تشغّل ملف entry واحد فقط
 * (لا يمكن تشغيل start:server و start:worker كعمليتين منفصلتين).
 */
runMigrations(config)
    .then(() => bootstrap(config))
    .then(() => bootstrapWorker(config))
    .then(worker => worker.startJobQueue())
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
