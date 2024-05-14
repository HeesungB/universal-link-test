import './App.css'

function App() {

  return (
    <div>
      <div className="card">
        <button onClick={() => location.href = "https://deeplink.keplr.app/staking?chainId=akashnet-2&userIdentifier=abc&activityName=akash_stake"}>
          Universal Link Test
        </button>
      </div>
    </div>
  )
}

export default App
