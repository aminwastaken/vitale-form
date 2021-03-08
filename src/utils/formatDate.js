const formatDate = (date, separator) => {
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return year + separator + month + separator + day;
};

export default formatDate;
