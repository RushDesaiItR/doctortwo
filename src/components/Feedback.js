import React from 'react';

const Feedback = () => {
    return (
    <div className="form-feedback">
         <center><h1>Feedback</h1></center>
         <label>Email</label>
         <div class="form-group">
            <input type="text" placeholder="Email"/>
        </div> 
        <div class="form-group">
        <label>Position Mark</label>
       <div style={{display:"flex"}}>
       <label class="checkbox-container">Great
           <input type="radio" name="review" checked="checked" />
            <span class="checkmark"></span>
        </label>
        <label class="checkbox-container">Excellent
             <input type="radio" name="review"/>
            <span class="checkmark"></span>
        </label>
        <label class="checkbox-container">Bad
            <input type="radio" name="review"/>
            <span class="checkmark"></span>
        </label>
      
       </div>
       </div>
       <label>Feedback</label>
       <div class="form-group">
            <textarea placeholder="Enter Message" name="" rows="4" cols="50"/>
        </div>
        <div class="form-group">
            <button class="medicine-card-btn" style={{display:"block"}}>Submit</button>
        </div>
    </div>
    )
}



export default Feedback;