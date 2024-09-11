import ads from '../assets/images/ads.jpg'

function Ads(){
    return(
        <div class="sec-image">
        <img src={ads} alt="sec-image"/>
        <div class="sec-image__offer">
            <h1>Find the right fit</h1>
            <p>
                The topics you want, taught by real-world experts. Courses as low as ₹449 until August 8.
            </p>
        </div>
    </div>
    )
}

export default Ads