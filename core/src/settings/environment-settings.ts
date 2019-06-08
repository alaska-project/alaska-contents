
// export interface EnvironmentConfig {
//     contentsApiEndpoint: string;
// }

// export function setupConfig(config: EnvironmentConfig) {
//     if (!window) {
//         return;
//     }

//     const win = window as any;
//     const AlaskaContents = win.AlaskaContents;

//     if (AlaskaContents && AlaskaContents.config && 
//         AlaskaContents.config.constructor.name !== 'Object') {
//         console.error('AlaskaContents config was already initialized');
//         return;
//     }

//     win.AlaskaContents = win.AlaskaContents || {};
//     win.AlaskaContents.config = {
//         ...win.AlaskaContents.config,
//         ...config
//     };

//     return win.AlaskaContents.config;
// }

// export function getConfig(): EnvironmentConfig {
//     const win = window as any;
//     const AlaskaContents = win.AlaskaContents;

//     if (!AlaskaContents) {
//         throw new Error('AlaskaContents settings not initialized');
//     }

//     return AlaskaContents;
// }