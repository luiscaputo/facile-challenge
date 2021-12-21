import connection from "../../src/database";
import { decript } from "../../src/utils/functions";

describe("Should decript string", () => {
  it("decript", () => {
    const string = "Teste";

    const EncriptingString = decript(string);

    console.log(EncriptingString);

    expect(EncriptingString);
  });
});
