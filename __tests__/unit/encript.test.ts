import { encript } from "../../src/utils/functions";

describe("Should encript string", () => {
  it("Encript", () => {
    const string = "Teste";

    const EncriptingString = encript(string);

    console.log(EncriptingString);

    expect(EncriptingString);
  });
});
