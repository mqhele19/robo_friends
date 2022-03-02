import React from 'react';

//we have a simple component that is
//returning card
//img elements must have an alt prop

const Card = ({name,email,id}) => {
	return (

<div className = 'bg-light-green dib br3 pd3 ma2 grow bw2 shadow'>

<img alt = 'robots' src={'https://robohash.org//${id}?200x200'}/>
<div>
<h2>{name}</h2>
<p>{email}</p>
</div>
</div>
		);
}


export default Card;