import urlParseDbConnection from "../../src/utils/urlParseDbConnection";

describe("Parse Url", () => {
  it("should parse a postgres url connetion", () => {
    const configPostgres = {
      host: "localhost",
      username: "username",
      password: "password",
      database: "database",
      dialect: "postgres",
      port: 5432
    };

    const {
      host,
      username,
      password,
      database,
      dialect,
      port
    } = configPostgres;
    const postgresUrl = `${dialect}://${username}:${password}@${host}:${port}/${database}`;

    const parsedPostgresUrl = urlParseDbConnection(postgresUrl);

    expect(parsedPostgresUrl).toEqual(configPostgres);
  });

  it("should parse a empty postgres url connetion", () => {
    const postgresUrl = "";

    const parsedPostgresUrl = urlParseDbConnection(postgresUrl);

    expect(parsedPostgresUrl).toEqual({});
  });
});
