// type LogConsole = { err: Error, result: any[], ids: number[], modelName: string, method: string, args: any[], kwargs: object}
/*
export const ExtendedConsole = {
    logWithLocation (params: LogConsole) {
        if (params.err){
            console.error(`Error: ${params.err}`);            
        } else {
            console.log(`modelName: ${params.modelName}, method: ${params.method}, result: ${params.result.toString()}, ids: ${params.ids.toString()},
                args: ${params.args.toString()}, kwargs: ${params.kwargs.toString()}`);
        }
    }
}
*/

export class ExtendedConsole {

    public static logWithLocation (params: { err?: Error, payload?: {service: string, method: string, args: {}}, result?: any[], ids?: number[], modelName?: string, method?: string, args?: any[], kwargs?: object}) {
        if (params.err){
            console.error(`Error: ${params.err}`);            
        } else {
            console.log(`modelName: ${params.modelName}, method: ${params.method}, result: ${params.result.toString()}, ids: ${params.ids.toString()},
                args: ${params.args.toString()}, kwargs: ${params.kwargs.toString()}`);
        }
    }

}