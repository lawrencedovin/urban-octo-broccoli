it('should calculate lower-bracket taxes', () => {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
  });
  
  it('should calculate higher-bracket taxes', () => {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
  });

  it('should throw Error for non-numerical values', () => {
    expect(() => calculateTaxes('askdks')).toThrowError();
    expect(() => calculateTaxes([])).toThrowError();
  });