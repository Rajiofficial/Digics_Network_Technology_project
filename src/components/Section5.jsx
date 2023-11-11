import React from 'react'
import "./Css/section5.css"

const Section5 = () => {


    document.querySelectorAll('.counting').forEach(function(element) {
        var countTo = parseInt(element.getAttribute('data-count'), 10);
        var countNum = parseInt(element.textContent, 10);
      
        var startTime;
        var duration = 3000;
      
        function updateCount(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = timestamp - startTime;
      
          var percentage = Math.min(progress / duration, 1);
          var currentCount = Math.floor(countNum + percentage * (countTo - countNum));
      
          element.textContent = currentCount;
      
          if (progress < duration) {
            requestAnimationFrame(updateCount);
          } else {
            element.textContent = countTo;
            // alert('finished');
          }
        }
      
        requestAnimationFrame(updateCount);
      });

      
      
      
      


    
  return (
    <div>
         <div className='section5_container'>
         {/* <!-- start count stats --> */}

<section id="counter-stats" class="wow fadeInRight" data-wow-duration="1.4s">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 stats">
        <i class="fa fa-code" aria-hidden="true"></i>
        <div class="counting" data-count="900000">0</div>
        <h5>Lines of code</h5>
      </div>

      <div class="col-lg-3 stats">
        <i class="fa fa-check" aria-hidden="true"></i>
        <div class="counting" data-count="280">0</div>
        <h5>Projects done</h5>
      </div>

      <div class="col-lg-3 stats">
        <i class="fa fa-user" aria-hidden="true"></i>
        <div class="counting" data-count="75">0</div>
        <h5>Happy clients</h5>
      </div>

      <div class="col-lg-3 stats">
        <i class="fa fa-coffee" aria-hidden="true"></i>
        <div class="counting" data-count="999">0</div>
        <h5>Cups of coffee</h5>
      </div>


    </div>
    {/* <!-- end row --> */}
  </div>
  {/* <!-- end container --> */}

</section>

{/* <!-- end cont stats --> */}

         </div>
    </div>
  )
}

export default Section5
