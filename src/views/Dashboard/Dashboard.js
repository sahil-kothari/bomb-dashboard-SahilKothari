import React from 'react'

function Dashboard() {
  return (
    <div className="h-screen w-full">
      <div class="flex justify-center flex-col gap-4 p-8">
        <div className="grid grid-cols-3 gap-4 py-2 shadow-xl w-full bg-black bg-opacity-40 hover:bg-opacity-25">
          <div className="col-span-2 flex flex-col h-full gap-2">
            <button
              type="button"
              className="w-full px-6  py-2.5 border-2 solid text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Invest Now
            </button>
            <div className="w-full flex gap-4">
              <button
                type="button"
                className="w-1/2 px-6 py-2.5 border-2 solid text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Chat on Discord
              </button>
              <button
                type="button"
                className="w-1/2 px-6 py-2.5 border-2 solid text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Read Docs
              </button>
            </div>
            <div className='p-6 w-full rounded-2xl border-opacity-30 border-2 bg-black bg-opacity-40 hover:bg-opacity-25'>
              <div className="flex">
                <p className="text-4xl font-semibold text-white">Boardroom</p>
                <span className="bg-green-500 text-white rounded-md py-1 mb-2 ml-4 px-2 mr-3 ">
                  Recommended
                </span>
                <div className="w-2/3"></div>
                <span className="text-white text-lg">TVL: $1,008,430</span>
              </div>
              <p class="text-gray-100 text-base mb-4">
                Stake your LP tokens in our farms to start earning $BSHARE
              </p>
              <div className="grid grid-cols-3 gap-2 text-white text-2xl mt-4">
                <div className="">Current Price: (Bomb)^2</div>
                <div className="">Available to redeem: </div>
                <div className="flex flex-col justify-around content-center gap-4 row-span-2">
                  <div className="w-full flex justify-between items-center">
                    <span>Purchase BBond</span>
                    <button
                      type="button"
                      className="px-6  py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Purchase
                    </button>
                  </div>
                  <div>
                  <div className="flex-grow h-px bg-gray-400 mb-4"></div>
                  <div className="w-full flex justify-between items-center">
                    <span>Redeem Bomb</span>
                    <button
                      type="button"
                      className="px-6  py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Redeem
                    </button>
                  </div>
                  </div>
                </div>
                <div className="text-xl text-slate-300">BBond = 6.2872 BTCB</div>
                <div className="text-xl text-slate-300">456</div>
              </div>
            </div>
          </div>
          <div className="h-full p-4 rounded-2xl border-opacity-30 border-2 bg-black bg-opacity-40 hover:bg-opacity-25">
            <p className="text-3xl font-semibold text-white">Learn More</p>
          </div>
        </div>
        <div className="rounded-lg shadow-xl  w-full border-opacity-30 border-2  bg-black bg-opacity-40 hover:bg-opacity-25">
          <div class=" p-6   ">
            <div className=" flex">
              <span class="text-gray-100 text-xl leading-tight font-medium ">
                Bomb Farms
              </span>
              <div className="w-5/6"></div>
              <button
                type="button"
                class="px-6  py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Claim All
              </button>
            </div>
            <p class="text-gray-100 text-base mb-4">
              Stake your LP tokens in our farms to start earning $BSHARE
            </p>
            <div className="flex mb-2 mt-16">
              <p className="text-4xl font-semibold text-white">BOMB-BTCB</p>
              <span className="bg-green-500 text-white rounded-md py-1 mb-2 ml-4 px-2 mr-3 ">
                Recommended
              </span>
              <div className="w-2/3"></div>
              <span className="text-white text-lg">TVL: $1,008,430</span>
            </div>
            <div className="flex-grow h-px bg-gray-400"></div>
            <div className="grid grid-cols-3 gap-2 text-white text-2xl mt-4">
              <div className="">Daily Returns</div>
              <div className=""> Your Stake</div>
              <div className="">Earned</div>
              <div className="">2%</div>
              <div className=""> 6.0000 ~ $1171</div>
              <div className="">6.4413 ~ $298.88</div>
            </div>

            <button
              type="button"
              class="px-6 mt-8 py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Claim All
            </button>
            <button
              type="button"
              class="px-6 ml-4 mt-8 py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Claim All
            </button>
            <button
              type="button"
              class="px-6 ml-4 mt-8 py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Claim All
            </button>
          </div>
          <div className="flex-grow h-px bg-blue-400"></div>

          <div className='p-6'>
            <div className="flex mb-2 mt-16">
              <p className="text-4xl font-semibold text-white">BOMB-BTCB</p>
              <span className="bg-green-500 text-white rounded-md py-1 mb-2 ml-4 px-2 mr-3 ">
                Recommended
              </span>
              <div className="w-2/3"></div>
              <span className="text-white text-lg">TVL: $1,008,430</span>
            </div>
            <div className="flex-grow h-px bg-gray-400"></div>
            <div className="grid grid-cols-3 gap-2 text-white text-2xl mt-4">
              <div className="">Daily Returns</div>
              <div className=""> Your Stake</div>
              <div className="">Earned</div>
              <div className="">2%</div>
              <div className=""> 6.0000 ~ $1171</div>
              <div className="">6.4413 ~ $298.88</div>
            </div>

            <button
              type="button"
              class="px-6 mt-8 py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Claim All
            </button>
            <button
              type="button"
              class="px-6 ml-4 mt-8 py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Claim All
            </button>
            <button
              type="button"
              class="px-6 ml-4 mt-8 py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Claim All
            </button>
          </div>
        </div>

        <div className="rounded-lg shadow-xl  w-full border-opacity-30 border-2  bg-black bg-opacity-40 hover:bg-opacity-25">
          <div className='p-6'>
            <div className=" flex">
              <span class="text-gray-100 text-xl leading-tight font-medium ">
                Bomb Farms
              </span>
              <div className="w-5/6"></div>
            </div>
            <p class="text-gray-100 text-base mb-4">
              Stake your LP tokens in our farms to start earning $BSHARE
            </p>
            <div className="grid grid-cols-3 gap-2 text-white text-2xl mt-4">
              <div className="">Current Price: (Bomb)^2</div>
              <div className="">Available to redeem: </div>
              <div className="flex flex-col justify-around content-center gap-4 row-span-2">
                <div className="w-full flex justify-between items-center">
                  <span>Purchase BBond</span>
                  <button
                    type="button"
                    className="px-6  py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Purchase
                  </button>
                </div>
                <div>
                <div className="flex-grow h-px bg-gray-400 mb-4"></div>
                <div className="w-full flex justify-between items-center">
                  <span>Redeem Bomb</span>
                  <button
                    type="button"
                    className="px-6  py-2.5 border-2 solid rounded-2xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Redeem
                  </button>
                </div>
                </div>
              </div>
              <div className="text-xl text-slate-300">BBond = 6.2872 BTCB</div>
              <div className="text-xl text-slate-300">456</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard