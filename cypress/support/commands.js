// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//     options = options || {}
//     if (Cypress.env('basic_un') && Cypress.env('basic_pass'))
//         options.auth = {
//             username: Cypress.env('basic_un'),
//             password: Cypress.env('basic_pass'),
//         }
//     return originalFn(url, options)
// })

//Custome Login Command
Cypress.Commands.add('login', () => {
    cy.readFile('utils/assets/prod.json', { log: false }).then((jsonFile) => {
        const username = jsonFile.prod.username
        const password = jsonFile.prod.password
        const baseURL = jsonFile.url.baseurl
        //vsit the tms website
        cy.visit(baseURL, {
            timeout: 30000,
        })
        cy.get('#email').type(username)
        cy.get('#password', { log: false }).type(password, { log: false })
        cy.get('.ant-btn').click()
        cy.get('.ant-layout-content', { timeout: 20000 }).should('be.visible')
    })
})

//Select Nth option form a select option
Cypress.Commands.add(
    'selectNth',
    { prevSubject: 'element' },
    (subject, pos) => {
        cy.wrap(subject)
            .children('option')
            .eq(pos)
            .then((e) => {
                cy.wrap(subject).select(e.val())
            })
    }
)

//Custome Logger command
Cypress.Commands.add('PomLog', (page, method) => {
    Cypress.log({
        name: 'POM methods',
        displayName: '🚩',
        message: `**pom/${page}** || **${method}()**`,
        consoleProps: () => {
            return {
                Page: page,
                Method: method,
                'Session Storage': window.sessionStorage,
            }
        },
    })
})

/**
 * @deprecated Since version 6.0. cy.server and cy.route are deprcated
 */
Cypress.Commands.add(
    'mroute',
    (method_type, path, stub_data, name, manual_overide) => {
        cy.server()
        let stubbing = Cypress.env('stubbing') || false
        if (manual_overide !== undefined) stubbing = manual_overide

        if (stubbing)
            cy.fixture(stub_data).then((data) => {
                cy.route(method_type, path, data).as(name)
            })
        else cy.route(method_type, path).as(name)
    }
)
