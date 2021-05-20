import React, { Component } from 'react';
import Travels1 from '../images/travel2.jpg'
import Travels2 from '../images/travel3.jpg'


class Travels extends Component {

  render() {
  return (

    
    <div className="container mt-10">
      <h2>Travels</h2>
      <p>Since 2014 we regularly travel to London, Dublin or Edinburgh with our students. In June 2019 we were back in Edinburgh and this time the weather was just beautiful and sunny.We were a large group of seven people and explored almost everything in Edinburgh on foot, which makes the city so nice.Everything is easily accessible on foot and by bus and train.</p>
      <div className="flex-center"><img src={Travels1} className="travels-img" alt="image" /></div>
      <p>IRLAND-REISE</p>
<p>Hello dear visitors, dear parents and students!</p>

<p>This year we were in Dublin, the capital of Ireland, during the Easter holidays =)</p>

<p>This time five students travelled with me! Melissa was new and she certainly had a lot of fun. It was a very pleasant trip and the weather was great.Even sunny days are likely to be in Dublin, a city known for usually rainy weather. We even met an imitator of Ed Sheeran, twice! Once in the airport towards Dublin (and he was with us on the plane LOL) and later in the city.But the girls finally said that he wasn't as beautiful as Sheeran, so they didn't want to take a picture with him...</p>
<div className="flex-center"><img src={Travels2} className="travels-img" alt="image" /></div>
      <div className="tr-img1 "></div>

    </div>


    
  




    )
    }
  }

export default Travels