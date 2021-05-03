import "./App.css";

const Footer= () => {
    return (
        <div className="Footer">   
        
            <div class="footer">
                <div>
                    <div class="leftF">
                        <h1> math<span class="footer_mathtech" >Tech</span> </h1>
                        <p>
                        Our mission is to provide the world with accessible math materials by making Harvard Math courses available. mathTech is a nonprofit organisation lead by students
                        </p>
                        
                    </div>
                    <div class="centerL">
                        <h3>Courses</h3>
                        <p>Algebra</p>
                        <p>Calculas and analysis</p>
                        <p>Geometry</p>
                        <p>Logic</p>
                    </div>
                    
                    <div class="centerR">
                        <p></p>
                        <p>Number theory</p>
                        <p>Dynamic System</p>
                        <p>Game Theory</p>
                    </div>

                    <div class="rightF">
                        <p></p>
                        <p>Information Theory</p>
                        <p>Signal Processing</p>
                        <p>Theory of Computation</p>
                        <p>Probability and Statistics</p>                  
                    </div>
                </div>
                <div class="newsletter">
                    <div> <h3>Sign up to our newsletter</h3></div>
                    <div class="news_rectangle"> <div class="new_text"> enter email address </div> <button class="btn_newsletter">subscribe</button></div>

                    <div class="about_nl">
                    <p>About us . Community </p>
                    </div>
                    <div class="copy_nl">
                        <p>copywrite mathTech 2021 </p>
                    </div>
                
                </div>
                
            </div>
        
    </div>

    );
};


export default  Footer;


