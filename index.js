const choo = require("choo")
const html = require("choo/html")

app = choo()

app.model({
    namespace: 'auth',

    state: {
        token: 'superSecretToken'
    }
})

app.model({
    namespace: 'properties',

    state: {
        properties: []
    },

    effects: {
        fetch: (state, payload, send, done) => {
            window.alert(JSON.stringify(state))
            window.alert(state.auth.superSecretToken === 'superSecretToken')
        }
    }
})

app.router([['/', (state, prev, send) => {
    const fetchProperties = () => {
        send('properties:fetch')
    }

    return html`
        <div>
            ${state.auth.token}

            <button onclick=${fetchProperties}>Fetch properties!</button>
        </div>
    `
}]])

document.body.appendChild(app.start())