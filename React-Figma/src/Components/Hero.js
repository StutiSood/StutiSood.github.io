import Man from '../assets/dweep io 1.svg'
import './Hero.css'
const Hero = ()=>{
    return(
        <>
            <div class="banner">
            <div class="section-left">
            <p class="header">An inspiring design delivered to your inbox every morning</p>
            <p class="description">Our team scouts the internet for the best designs, illustrations and art and delivers
                a truly inspiring
                one
                every day to
                your inbox</p>
            <p class="tag">Show me how it looks</p>
            <input type="email" placeholder="Your e-mail address" />
            <button>Register Now</button>
            <div class="bottom-line">Free - No Spam - No Data Sharing</div>
        </div>
        <div class="section-right">
            <img src={Man} />
        </div>
    </div>
        </>
    )
}

export default Hero