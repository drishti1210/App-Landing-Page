import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';


const App = () => {
  return (
    <>
  
      <SectionWrapper 
        title="You own store of NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="How to open App in your Smartphone?"
        description="Install Expo Go app from playstore. Click on 'View it on Expo Go' button shown right above, then either scan the QR Code  or paste the link ->'exp://exp.host/@drishti1210/ReactNative?release-channel=default' in the Expo Go App "
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="Wallet is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Drishti Singh</span>
        </p>
      </div>
    </>
  );
}

export default App;