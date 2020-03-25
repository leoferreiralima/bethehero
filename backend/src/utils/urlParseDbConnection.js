const { URL } = require("url");

module.exports = function (urlConnection) {
  if (!urlConnection) {
    return {};
  }

  const { protocol, username, password, hostname: host, port: stringPort, pathname } = new URL(urlConnection);

  const database = pathname.substring(1, pathname.length).split("/").shift();
  const dialect = protocol.replace(":", "");
  const port = parseInt(stringPort);

  const config = {
    dialect,
    username,
    password,
    host,
    port,
    database
  };

  return config;
};
