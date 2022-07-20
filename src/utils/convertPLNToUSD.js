
export const convertPLNToUSD = (PLN) => {
  const num = parseFloat(PLN);

  if (typeof(PLN) !== 'number' && typeof(PLN) !== 'string'&& PLN || PLN===null) {
    return 'Error'
  } else if (isNaN(num) || PLN==='') {
    return num
  } else if (num <= 0) {
    return '$0.00'
  }
    const PLNtoUSD = PLN / 3.5;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })
    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ')
  }