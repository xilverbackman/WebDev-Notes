exports.myDateTime = function () {
  const today = new Date();
  const tomorrow = new Date(today); // Create a copy to avoid modifying 'today'
  return(Date(tomorrow.setDate(today.getDate() + 1)));
};
