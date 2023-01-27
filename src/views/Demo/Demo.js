import React from 'react'
import useBombStats from '../../hooks/useBombStats';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import {getDisplayBalance} from '../../utils/formatBalance';
import useBombFinance from '../../hooks/useBombFinance';
import useTokenBalance from '../../hooks/useTokenBalance';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
// import { useMemo, useState } from 'react';
// import { roundAndFormatNumber } from '../../0x';

// const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

// const Tryy = () => {
//   return (
//     <div>bombTotalSupply</div>
//   )
// }

// export default Tryy






// import React from 'react'

function Demo() {
  // const bombStats = useBombStats();
  //const bombFinance = useBombFinance();
  const bombStats = useBombStats();
  const bondsPurchasable = useBondsPurchasable();

  const currentEpoch = useCurrentEpoch();
  //const bondBalance = useTokenBalance(bombFinance?.BBOND);      Due to this its not working

  return (
    <>
    <div style={{color: "red"}}>Total Supply: {bombStats ? (bombStats.priceInDollars):("Loading....")}</div>
    {/* <div style={{color: "red"}}>hello</div> */}
    <div style={{color: "blue"}}>Bonds Available: {getDisplayBalance(bondsPurchasable, 18, 4) + ' BBOND available for purchase'}</div>
    
    </>
    
    
  )
}



export default Demo