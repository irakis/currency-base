
export const convertPLNToUSD = (PLN) => {
  console.log(PLN)
  console.log('fire!')
  console.log(isNaN(PLN));

if(isNaN(PLN)) {

  console.log('use number')
} else
  {
    const PLNtoUSD = PLN / 3.5;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })
    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ')
  } 
}