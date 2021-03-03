const normalizeSsn = (value) => {
  if (!value) return value;
  const unformattedValue = value.replace(/[^\d]/g, '');
  if (unformattedValue.length < 2) return unformattedValue;
  if (unformattedValue.length < 4)
    return unformattedValue.slice(0, 1) + ' ' + unformattedValue.slice(1, 3);
  if (unformattedValue.length < 6)
    return (
      unformattedValue.slice(0, 1) +
      ' ' +
      unformattedValue.slice(1, 3) +
      ' ' +
      unformattedValue.slice(3, 5)
    );
  if (unformattedValue.length < 8)
    return (
      unformattedValue.slice(0, 1) +
      ' ' +
      unformattedValue.slice(1, 3) +
      ' ' +
      unformattedValue.slice(3, 5) +
      ' ' +
      unformattedValue.slice(5, 7)
    );
  if (unformattedValue.length < 11)
    return (
      unformattedValue.slice(0, 1) +
      ' ' +
      unformattedValue.slice(1, 3) +
      ' ' +
      unformattedValue.slice(3, 5) +
      ' ' +
      unformattedValue.slice(5, 7) +
      ' ' +
      unformattedValue.slice(7, 10)
    );

  return (
    unformattedValue.slice(0, 1) +
    ' ' +
    unformattedValue.slice(1, 3) +
    ' ' +
    unformattedValue.slice(3, 5) +
    ' ' +
    unformattedValue.slice(5, 7) +
    ' ' +
    unformattedValue.slice(7, 10) +
    ' ' +
    unformattedValue.slice(10, 13)
  );
};

export default normalizeSsn;
