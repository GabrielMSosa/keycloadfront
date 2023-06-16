
export const environment = {
    production: false,
    serverUrl: 'http://localhost:8080',
    keycloak: {
      // Url of the Identity Provider
      issuer: 'http://localhost:9090',
      // Realm
      realm: 'demo-realm',
      clientId: 'demo-angular',
    },
  };