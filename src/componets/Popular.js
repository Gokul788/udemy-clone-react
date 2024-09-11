import photo1 from '../assets/images/c1 (1).jpg'
import photo2 from '../assets/images/c1 (2).jpg'
import photo3 from '../assets/images/c1 (3).jpg'
import photo4 from '../assets/images/c1 (4).jpg'
import photo5 from '../assets/images/c1 (5).jpg'
import photo6 from '../assets/images/c1 (7).jpg'
import photo7 from '../assets/images/c2 (1).jpg'
import photo8 from '../assets/images/c2 (2).jpg'
import photo9 from '../assets/images/c2 (3).jpg'
import photo10 from '../assets/images/c2 (5).jpg'
import photo11 from '../assets/images/c2 (4).jpg'



function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular-container">
            <div class="course-card">
                <img src={photo1} alt="card"/>
                <h3>The Complete iOS 17 Developer Course</h3>
                <p>Athul</p>
                <p>4.5 &#11088;&#11088;&#11088;&#11088;</p>
                <p>&#8377;3,299 <del>&#8377;4,500</del></p>
            </div>
            <div class="course-card">
                <img src={photo5} alt="card"/>
                <h3>Python for Data Science and Machine Learning</h3>
                <p>lotta thoppi</p>
                <p>4.8 &#11088;&#11088;&#11088;&#11088;</p>
                <p>&#8377;4,999 <del>&#8377;5,499</del></p>
            </div>
            <div class="course-card">
                <img src={photo6} alt="card"/>
                <h3>Python and Flask Bootcamp: Create Websites using Flask!</h3>
                <p>killer.</p>
                <p>3.9 &#11088;&#11088;&#11088;</p>
                <p>&#8377;5,499 <del>&#8377;6,500</del></p>
            </div>
            <div class="course-card">
                <img src={photo7} alt="card"/>
                <h3>NLP - Natural Language Processing with Python</h3>
                <p>petter</p>
                <p>4.2 &#11088;&#11088;&#11088;&#11088;</p>
                <p>&#8377;3,499 <del>&#8377;4,499</del></p>
            </div>
            <div class="course-card">
                <img src={photo8} alt="card"/>
                <h3>The Beginner's Guide to Artificial Intelligence</h3>
                <p>Roanldo</p>
                <p>3.5 &#11088;&#11088;&#11088;</p>
                <p>&#8377;3,669 <del>&#8377;4,500</del></p>
            </div>
            <div class="course-card">
                <img src={photo9} alt="card/"/>
                <h3>Statistics for Business Analytics and Data Science</h3>
                <p>Harry Kane</p>
                <p>4.6 &#11088;&#11088;&#11088;&#11088;</p>
                <p>&#8377;5,500 <del>&#8377;6,499</del></p>
            </div>
            <div class="course-card">
                <img src={photo10} alt="card"/>
                <h3>Complete Communication Skills Master Class</h3>
                <p>john k</p>
                <p>4.4 &#11088;&#11088;&#11088;&#11088;</p>
                <p>&#8377;3,099 <del>&#8377;4,499</del></p>
            </div>
            <div class="course-card">
                <img src={photo11} alt="card"/>
                <h3>Automate the Boring Stuff with Python Programming</h3>
                <p>Jaco Flex</p>
                <p>3.7 &#11088;&#11088;&#11088;</p>
                <p>&#8377;4,999 <del>&#8377;5,499</del></p>
            </div>
        </div>
    </div>
    )
}
export default Popular