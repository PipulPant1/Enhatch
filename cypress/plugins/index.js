// /// <reference types="cypress" />
// // ***********************************************************
// // This example plugins/index.js can be used to load plugins
// //
// // You can change the location of this file or turn off loading
// // the plugins file with the 'pluginsFile' configuration option.
// //
// // You can read more here:
// // https://on.cypress.io/plugins-guide
// // ***********************************************************

// // This function is called when a project is opened or re-opened (e.g. due to
// // the project's config changing)

// const fs = require('fs-extra')
// const path = require('path')

// //Getting configure file
// const getConfigurationByFile = async (file) => {
//     const pathToConfigFile = path.resolve('config', `cypress.${file}.json`)
//     let config = await fs.readJSON(pathToConfigFile)
//     return config
// }

// /**
//  * @type {Cypress.PluginConfig}
//  */
// module.exports = (on, config) => {
//     // `config` is the resolved Cypress config
//     const file = config.env.configFile
//     // `on` is used to hook into various events Cypress emits
//     on('task', {
//         wirteInFile(string_data) {
//             let obj = JSON.parse(string_data)
//             const pathToFixture = path.resolve(
//                 'tests',
//                 `${file}`,
//                 'fixtures',
//                 obj.file_path_inside_fixture
//             )
//             fs.writeFileSync(pathToFixture, obj.data)
//             return null
//         },
//     })
//     return getConfigurationByFile(file)
// }
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
}
