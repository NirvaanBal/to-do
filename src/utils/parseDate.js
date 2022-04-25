const parseDate = (date, month) => {
  if (
    date === '31' &&
    (month === 'apr' || month === 'jun' || month === 'sep' || month === 'nov')
  ) {
    date = '30';
  }

  if ((date === '29' || date === '30' || date === '31') && month === 'feb') {
    date = '28';
    if (new Date().getFullYear() % 4 === 0) date = '29';
  }

  return `${month} ${date}`;
};

export default parseDate;
