import React from 'react';
import styles from './SettingsPhoto.module.css';


function SettingsPhoto(props) {

    const imgDogs = props.dogs.map(dog => {
        return <label key={dog.id}>
            <img src={dog.img} alt={'dog'} className={styles.dog}/>
            <input type='radio'
                   onChange={props.getPhoto}
                   name='photo' value={dog.img}/>
        </label>
    });

    return <fieldset>
        <legend><h3>Victim photo selection:</h3></legend>
        <section className={styles.img}>
            {imgDogs}
        </section>
    </fieldset>
}

export default SettingsPhoto;
