import CapitalTable from "../components/CapitalTable"
import MarketPrice from "../components/MarketPrice"
import SpendingTable from "../components/SpendingTable"

const Home = () => {
  return (
    <div>
      <div className="flex place-content-center pt-6 pb-4 md:py-8 px-4 md:px-8 md:max-h-screen">
        <div className="flex flex-col gap-y-8 w-full md:w-[720px]">
          <div className="flex flex-col gap-y-2">
            <p className="text-[12px] font-semibold text-neutral-600">866879806881</p>
            <div className="flex flex-col gap-y-[1px]">
              <p className="text-[20px]">23.698,28</p>
              <div className="flex gap-x-[5px] text-green-300 text-[10px]">
                <p>13.928,80</p>
                <p>(12%)</p>
              </div>
            </div>
          </div>
          <img src="pixel.gif" alt="banner" className="w-full h-[120px] object-cover" />
          <div className="pb-4">
            <p className="font-medium text-[14px] pb-4">Current Price</p>
            {/* ID LIST HERE https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?gid=0#gid=0 */}
            <div className="grid grid-cols-2 gap-y-2">
              <MarketPrice coinId="bitcoin" />
              <MarketPrice coinId="ethereum" />
              <MarketPrice coinId="sui" />
              <MarketPrice coinId="ondo-finance" />
            </div>
          </div>
          <div className="pb-4">
            <p className="font-medium text-[14px] pb-4">Capital Summary</p>
            <CapitalTable />
          </div>
          <div className="pb-4">
            <p className="font-medium text-[14px] pb-4">Monthly Spending</p>
            <SpendingTable />
          </div>
          <div className="pb-4">
            <p className="font-medium text-[14px] pb-4">Important Note</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home