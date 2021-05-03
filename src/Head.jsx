import "./App.css";

const Head= () => {
    return (
        <div>
          <header>
            <h1 class="head_mathtech"><span class="title_col_change">math</span>tech </h1> 
          
            <ul class="ul_nav">
            
              <li class="li_nav"><a href="/login">Home</a></li>
              <li class="li_nav"><a href="#">Courses</a></li>
              <li class="li_nav"><a href="#">About Us</a></li>
              <li class="li_nav"><a href="#">Community</a></li>
           
            </ul>
            <button class="contact_btn"> Contact Us </button>
            <div class="centered">
              <div class="line">
                <span class="line_dash"></span> 
                <div class="smallT"> Let's Learn Math</div>
              </div>
            </div>
            
            <div class="largeT">Discover Harvard Math Courses</div>

            <div class="main_search"> 

              <div class="course_name">Type Course Name</div>
              <span class="line_4"></span>
              <div class="topic">  Select Topic</div>              

              <button class="main_search_button">Search</button>
            </div>

          </header>
          
        </div>
    );
};


export default Head;


