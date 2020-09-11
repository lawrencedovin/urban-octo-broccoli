describe("calculateTaxes tax", () => {
  it("should calculate lower-bracket taxes", () => {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
  });

  it("should calculate higher-bracket taxes", () => {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
  });
});

it("should throw Error for non-numerical values", () => {
  expect(() => calculateTaxes("askdks")).toThrowError();
  expect(() => calculateTaxes([])).toThrowError();
});

describe("submitForm() tests", () => {
    it("save input val to usernames array", () => {
        input.value = 'chickan';
        submitForm();
        expect(usernames.length).toBe(1);
        expect(usernames.length).toContainer('chickan');
    });
});

afterEach(() => {
    input.value = '';
    usernames = [];
});

