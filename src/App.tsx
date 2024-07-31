import './App.css'

function App() {

  return (
    <div>
      <div className="card">
        <button
          onClick={() => location.href = "https://deeplink.keplr.app/staking?chainId=akashnet-2&userIdentifier=gECb4ZvZXeLjg4tjW4-4Sa3G9RjklxQSFdfgDjSikBi5uR53SF2ghwLV4y9y7_0Wlcspj3r3&activityName=akash_stake"}>
          Stake Link Test
        </button>
      </div>

      <div className="card">

        <button
          onClick={() => location.href = "https://deeplink.keplr.app/show-address?chainId=akashnet-2"}>
          Copy Address Link Test
        </button>
      </div>
    </div>
  )
}

export default App
