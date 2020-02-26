import React from 'react'

const Animal = (props) => {
    
    const {animals,index,displayNextImage} = props
    const {name,image} = animals[index]
    return (
        <div className = "animal-info">
            <h3 className = "animal-heading">{name}</h3>
             <img src = {image} alt = "animal" className = "animal-image"></img>
           <button onClick = {() => displayNextImage(index)} className = "animal-button">Next</button>
        </div>
    )
}

export default Animal
