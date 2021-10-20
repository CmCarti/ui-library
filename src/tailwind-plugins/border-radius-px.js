const borderRadius = {};

// Creates the border radius in pixels utility class
// Ex: .border-radius-10px

for (let i = 1; i < 51; i++) {
  borderRadius[`.border-radius-${i}px`] = {
    borderRadius: `${i}px`,
  };
}

module.exports = borderRadius;
