import photo1 from '../assets/images/c1 (1).jpg'
import photo2 from '../assets/images/c1 (2).jpg'
import photo3 from '../assets/images/c1 (3).jpg'
import photo4 from '../assets/images/c1 (4).jpg'


//Recommended

function Recommended(){
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended For You</h1>
        <p>Pick the best fit</p>
        <div class="recommended-container">
            <div class="course-card">
                <img src={photo1} alt="card"/>
                <h3>Web Development Masterclass</h3>
                <p>Mehhanaz G</p>
                <p>4.5 &#11088;&#11088;&#11088;&#11088;</p>
                <p>&#8377;3,099 <del>&#8377;3,950</del></p>
            </div>
            <div class="course-card">
                <img src={photo2} alt="card"/>
                <h3>The Complete JavaScript Course 2024</h3>
                <p>Mrithul M</p>
                <p>3.4 &#11088;&#11088;&#11088;</p>
                <p>&#8377;4,299 <del>&#8377;4,699</del></p>
            </div>
            <div class="course-card">
                <img src={photo3} alt="card"/>
                <h3>Angular & NodeJS - The MEAN Stack Guide</h3>
                <p>Akshaya M</p>
                <p>4.4 &#11088;&#11088;&#11088;&#11088;</p>
                <p>&#8377;4,019 <del>&#8377;5,200</del></p>
            </div>
            <div class="course-card">
                <img src={photo4} alt="card"/>
                <h3>Robotics with AI</h3>
                <p>Gokul P</p>
                <p>3.4 &#11088;&#11088;&#11088;</p>
                <p>&#8377;5,699 <del>&#8377;12,200</del></p>
            </div>
        </div>
    </div>
 
    )
}

export default Recommended