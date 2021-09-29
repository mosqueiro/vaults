export const polygonPools = [
  /*
  {
    id: 'polygon-zefi',
    logo: 'single-assets/ZEFI.png',
    name: 'ZEFI Polygon',
    token: 'ZEFI',
    tokenDescription: 'ZCore Finance',
    tokenAddress: '0xCaf870DaD882b00F4b20D714Bbf7fceADA5E4195',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvPolygonZEFI',
    earnedTokenAddress: '0x4b36DA770cCE0A50e13F407A2C8B46d9D041d6Cb',
    earnContractAddress: '0x4b36DA770cCE0A50e13F407A2C8B46d9D041d6Cb',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'ZEFI',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'ZCore Finance',
    assets: ['ZEFI'],
    callFee: 0.05,
    withdrawalFee: '0.05%',
    performanceFee: '0.5%',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&outputCurrency=0xCaf870DaD882b00F4b20D714Bbf7fceADA5E4195',
  },
  */
  {
    id: 'polygon-zefi',
    logo: 'single-assets/ZEFI.png',
    name: 'ZEFI (Polygon)',
    token: 'ZEFI',
    tokenDescription: 'ZCore Vaults',
    tokenAddress: '0xCaf870DaD882b00F4b20D714Bbf7fceADA5E4195',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvZEFI',
    earnedTokenAddress: '0xcaee82cC440398AF0ed0c7343331147121c88998',
    earnContractAddress: '0xcaee82cC440398AF0ed0c7343331147121c88998',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'ZEFIM',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'ZCore Finance',
    assets: ['ZEFI'],
    callFee: 0.05,
    withdrawalFee: '0.05%',
    performanceFee: '0.05%',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=ETH&outputCurrency=0xcaf870dad882b00f4b20d714bbf7fceada5e4195',
  },

  {
    id: 'apeswap-crystal-matic',
    name: 'CRYSTL-MATIC',
    token: 'CRYSTL-MATIC',
    tokenDescription: 'Apeswap (Polycrystal)',
    tokenAddress: '0xb8e54c9ea1616beebe11505a419dd8df1000e02a',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvCRYSTL-MATIC',
    earnedTokenAddress: '0xD4aE5B604A7e33D63bb571827c32a593b162a98e',
    earnContractAddress: '0xD4aE5B604A7e33D63bb571827c32a593b162a98e',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'apeswap-crystal-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Apeswap',
    assets: ['CRYSTL', 'MATIC'],
    callFee: 0.5,
    withdrawalFee: '0.1%',
    performanceFee: '4%',
    addLiquidityUrl:
      'https://dex.polycrystal.finance/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64',
    buyTokenUrl:
      'https://dex.polycrystal.finance/#/swap?outputCurrency=0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64',
  },

  {
    id: 'apeswap-crystal-banana-eth',
    name: 'BANANA-ETH',
    token: 'BANANA-ETH',
    tokenDescription: 'Apeswap (Polycrystal)',
    tokenAddress: '0x44b82c02f404ed004201fb23602cc0667b1d011e',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvBANANA-ETH',
    earnedTokenAddress: '0x025C355Ddc0abbF5A71E8FE05BDcB76f06Bd4e57',
    earnContractAddress: '0x025C355Ddc0abbF5A71E8FE05BDcB76f06Bd4e57',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'apeswap-crystal-banana-eth',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Apeswap',
    assets: ['BANANA', 'ETH'],
    callFee: 0.5,
    withdrawalFee: '0.1%',
    performanceFee: '4%',
    addLiquidityUrl:
      'https://dex.polycrystal.finance/#/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x5d47baba0d66083c52009271faf3f50dcc01023c',
    buyTokenUrl:
      'https://dex.polycrystal.finance/#/swap?outputCurrency=0x5d47baba0d66083c52009271faf3f50dcc01023c',
  },

  {
    id: 'jetswap-poly-pwings-matic',
    name: 'pWINGS-MATIC',
    token: 'pWINGS-MATIC',
    tokenDescription: 'JetSwap',
    tokenAddress: '0xA0A6e9A5185d5737CF6F7920CB417EA2F07F03B3',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvpWINGS-MATIC',
    earnedTokenAddress: '0x051CC3c46670CC675235E2F6e93eAe1744fCc7e6',
    earnContractAddress: '0x051CC3c46670CC675235E2F6e93eAe1744fCc7e6',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'jetswap-poly-pwings-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'JetSwap',
    assets: ['pWINGS', 'MATIC'],
    callFee: 0.5,
    withdrawalFee: '0.1%',
    performanceFee: '4%',
    addLiquidityUrl:
      'https://polygon-exchange.jetswap.finance/#/add/MATIC/0x845E76A8691423fbc4ECb8Dd77556Cb61c09eE25',
    buyTokenUrl:
      'https://polygon-exchange.jetswap.finance/#/swap?outputCurrency=0x845E76A8691423fbc4ECb8Dd77556Cb61c09eE25',
  },

  {
    id: 'boneswap-quick-usdc-bone',
    name: 'BONE-USDC',
    token: 'BONE-USDC',
    tokenDescription: 'Quickswap (BoneSwap)',
    tokenAddress: '0xc4DA04f471210063f8C79a09D6152D63085451a5',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvBONE-USDC',
    earnedTokenAddress: '0x493164dF96b667Caf7a60257398C6C5D3dbc3D25',
    earnContractAddress: '0x493164dF96b667Caf7a60257398C6C5D3dbc3D25',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'boneswap-quick-usdc-bone',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'active',
    platform: 'BoneSwap',
    assets: ['BONEswap', 'USDC'],
    callFee: 0.5,
    withdrawalFee: '0.1%',
    performanceFee: '4%',
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x80244C2441779361F35803b8C711C6c8fC6054a3/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?outputCurrency=0x80244C2441779361F35803b8C711C6c8fC6054a3',
  },

  {
    id: 'boneswap-quick-wmatic-bone',
    name: 'BONE-MATIC',
    token: 'BONE-MATIC',
    tokenDescription: 'Quickswap (BoneSwap)',
    tokenAddress: '0x2d10b334646F6e61F2556c0f7eda2fF3D82d001e',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvBONE-MATIC',
    earnedTokenAddress: '0x4Ff197b33aB36ac98df095e6cab50D9Bf40c6Fe8',
    earnContractAddress: '0x4Ff197b33aB36ac98df095e6cab50D9Bf40c6Fe8',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'boneswap-quick-wmatic-bone',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'active',
    platform: 'BoneSwap',
    assets: ['BONEswap', 'MATIC'],
    callFee: 0.5,
    withdrawalFee: '0.1%',
    performanceFee: '4%',
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/0x80244C2441779361F35803b8C711C6c8fC6054a3/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?outputCurrency=0x80244C2441779361F35803b8C711C6c8fC6054a3',
  },

  {
    id: 'boneswap-ape-wmatic-bone',
    name: 'BONE-MATIC AP',
    token: 'BONE-MATIC AP',
    tokenDescription: 'ApeSwap (BoneSwap)',
    tokenAddress: '0xbCD83aB205A14648674FE67c97AAD89B261cBaC6',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvBONE-MATIC-ALP',
    earnedTokenAddress: '0xD7223e13212fB99f93B4aed06367673B0aBBc522',
    earnContractAddress: '0xD7223e13212fB99f93B4aed06367673B0aBBc522',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'boneswap-ape-wmatic-bone',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'active',
    platform: 'BoneSwap',
    assets: ['BONEswap', 'MATIC'],
    callFee: 0.5,
    withdrawalFee: '0.1%',
    performanceFee: '4%',
    addLiquidityUrl:
      'https://app.apeswap.finance/add/ETH/0x80244C2441779361F35803b8C711C6c8fC6054a3',
    buyTokenUrl:
      'https://app.apeswap.finance/#/swap?outputCurrency=0x80244C2441779361F35803b8C711C6c8fC6054a3',
  },

  {
    id: 'boneswap-sushi-wmatic-bone',
    name: 'BONE-MATIC SLP',
    token: 'BONE-MATIC SLP',
    tokenDescription: 'SushiSwap (BoneSwap)',
    tokenAddress: '0x4026895A93D720083E4469eE675156A8Ff8D3853',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvBONE-MATIC-SLP',
    earnedTokenAddress: '0x5F91DC44B659B541bC62CF39d41153333Ac4A6a2',
    earnContractAddress: '0x5F91DC44B659B541bC62CF39d41153333Ac4A6a2',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'boneswap-sushi-wmatic-bone',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'active',
    platform: 'BoneSwap',
    assets: ['BONEswap', 'MATIC'],
    callFee: 0.5,
    withdrawalFee: '0.1%',
    performanceFee: '4%',
    addLiquidityUrl: 'https://app.sushi.com/add/ETH/0x80244C2441779361F35803b8C711C6c8fC6054a3',
    buyTokenUrl:
      'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x80244C2441779361F35803b8C711C6c8fC6054a3',
  },

  /*

  {
    id: 'zefi-matic',
    name: 'ZEFI-MATIC',
    token: 'ZEFI-MATIC',
    tokenDescription: 'QuickSwap',
    tokenAddress: '0xD6BC1680Fe03A55d564130B36B5A11b8BbDed365',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'zvZEFI-MATIC',
    earnedTokenAddress: '0x37970637A6b3FA9924C274c9CFc47C0C430d7864',
    earnContractAddress: '0x37970637A6b3FA9924C274c9CFc47C0C430d7864',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'zefi-matic',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'QuickSwap',
    assets: ['ZEFI', 'MATIC'],
    callFee: 0,
    withdrawalFee: '0%',
    performanceFee: '0%',
    addLiquidityUrl:
      'https://quickswap.exchange/#/add/ETH/0xCaf870DaD882b00F4b20D714Bbf7fceADA5E4195',
    buyTokenUrl:
      'https://quickswap.exchange/#/swap?inputCurrency=ETH&outputCurrency=0xCaf870DaD882b00F4b20D714Bbf7fceADA5E4195',
  },
  */
];
