const color = {
  periwinkle: '9c88ff',
  '9c88ff': 'periwinkle'
};

function makeColor(name, hex) {
  return {
    name: hex, 
    hex: name
  };
}

function makeColor(name, hex) {
  const color = {};
  color[name] = hex;
  color[hex] = name;
  return color;
}

// Dynamic Key names
function makeColor(name, hex) {
  return {
    [name]: hex,
    [hex]: color
  };
}