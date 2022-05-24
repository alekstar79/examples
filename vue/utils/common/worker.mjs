/**
* @param {Function} job
* @return {function(*=): Promise<unknown>}
*/
export function workerInit(job)
{
    const url = window.URL.createObjectURL(new Blob(
        [`"use strict";\nself.onmessage = ${job.toString()}`],
        { type: 'text/javascript' }
    ))

    return data => new Promise((resolve, reject) => {
        const worker = new Worker(url, { type: 'module' })

        worker.onerror = reject

        worker.onmessage = e => {
            resolve(e.data)
        }

        worker.postMessage(data)
    })
}
